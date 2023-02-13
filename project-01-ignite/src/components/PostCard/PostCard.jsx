import { Avatar } from '../Avatar/Avatar'
import { Comments } from '../Comments/Comments'
import { useState } from 'react';

import moment from 'moment';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import styles from './PostCard.module.css'

const DEFAULT_MSG_EMPTY_POST = '*This post has no message.*'

export function PostCard({
  avatarUrl,
  authorName = 'User unknown',
  authorRole = 'Role not informed',
  publishedAt = new Date().toISOString(),
  message = DEFAULT_MSG_EMPTY_POST,
  comments = [] }) {

  const publishedAtFormatted = moment(publishedAt);
  const messageFormatted = message.length ? message : DEFAULT_MSG_EMPTY_POST;
  const [allComments, setAllComments] = useState(comments);
  const [newComment, setNewComment] = useState('');

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
  }

  function handleNewComment() {
    setNewComment(event.target.value);
  }

  function removeComment(commentIdToRemove) {
    const allCommentsWithoutRemovedOne = allComments.filter((comment) => {
      return comment.id !== commentIdToRemove;
    });
    setAllComments(allCommentsWithoutRemovedOne);
  }

  return (
    <article className={styles.postCard}>

      <header>
        <div className={styles.postCardAuthor}>

          <Avatar
            src={avatarUrl}
            alt="Profile Picture"
            width={80}
            height={80}
          />

          <div className={styles.postCardAuthorInfo}>
            <strong>{authorName}</strong>
            <span>{authorRole}</span>
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
        children={messageFormatted}
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
          { !allComments.length ? <p>Be the first to comment this!</p> : 
            allComments.map((comment) => {
              return (
                <Comments
                  onRemove={removeComment}
                  key={comment.id}
                  id={comment.id}
                  content={comment.content}
                  commentedAt={comment.commentedAt}
                  avatarUrl={comment.author.avatarUrl}
                  authorName={comment.author.name}
                  isPostCreator={comment.author.isPostCreator} />
              );
            })
          }
        </div>

      </footer>

    </article>

  )
}