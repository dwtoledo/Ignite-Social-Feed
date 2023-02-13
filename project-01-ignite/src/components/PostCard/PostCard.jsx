import { Avatar } from '../Avatar/Avatar'
import { Comments } from '../Comments/Comments'
import { useState } from 'react';

import moment from 'moment';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import styles from './PostCard.module.css'

const DEFAULT_MSG_EMPTY_POST = '*This post has no message.*'

export function PostCard({ data }) {

  const publishedAtFormatted = isValidDate(data.publishedAt) ? moment(data.publishedAt) : moment();
  const [allComments, setAllComments] = useState(data.comments.length ? data.comments : []);
  const [newComment, setNewComment] = useState('');

  function isValidDate(dateString) {
    let date = new Date(dateString);
    return !isNaN(date.getTime());
  }

  function submitComment() {
    event.preventDefault();
    setAllComments([...allComments, createNewComment()]);
    setNewComment('');
  }

  function createNewComment() {
    const now = new Date();

    return {
      author: {
        name: 'User not logged in',
        isPostCreator: false
      },
      commentedAt: now.toISOString(),
      content: newComment
    }

    //TODO - implement new comment api call
  }

  function handleNewComment() {
    setNewComment(event.target.value);
  }

  function removeComment(idToRemove) {
    const allCommentsWithoutRemovedOne = allComments.filter((comment) => {
      return comment.id !== idToRemove;
    });
    setAllComments(allCommentsWithoutRemovedOne);
    
    //TODO - implement remove comment api call
  }

  return (
    <article className={styles.postCard}>

      <header>
        <div className={styles.postCardAuthor}>

          <Avatar
            src={data.author.avatarUrl}
            alt="Profile Picture"
            width={80}
            height={80}
          />

          <div className={styles.postCardAuthorInfo}>
            <strong>
              {data.author.name ? data.author.name : 'User unknown'}
            </strong>
            <span>
              {data.author.role ? data.author.role : 'Role not informed'}
            </span>
          </div>
        </div>

        <time
          title={publishedAtFormatted.format("[Published on] L LT")}
          dateTime={publishedAtFormatted.toISOString()}>
          Published {publishedAtFormatted.from(moment())}:
        </time>

      </header>

      <ReactMarkdown
        className={styles.postCardMessage}
        children={data.content.length ? data.content : DEFAULT_MSG_EMPTY_POST}
        remarkPlugins={[remarkGfm]}
      />

      <footer className={styles.postCardFooter} >

        <form
          className={styles.postCardForm}
          autoComplete="off"
          onSubmit={submitComment}
        >
          <strong>Leave your feedback</strong>

          <textarea
            id="feedback-form"
            onChange={handleNewComment}
            name="feedback-form"
            placeholder='Write a comment...'
            value={newComment}
            required
          />

          <div className={styles.postCardButtonWrapper}>
            <button
              type="submit"
              disabled={!newComment.length}>
              Comment
            </button>
          </div>
        </form>

        <div className={styles.postCardComments}>
          {!allComments.length ? <p>Be the first to comment this!</p> :
            allComments.map((comment) => {
              return (
                <Comments
                  key={comment.id}
                  data={comment}
                  onRemove={removeComment}
                  isPostCreator={comment.author.isPostCreator} />
              );
            })
          }
        </div>

      </footer>

    </article>

  )
}