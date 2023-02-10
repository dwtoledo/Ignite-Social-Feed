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
  message = DEFAULT_MSG_EMPTY_POST }) {

  const publishedAtFormatted = moment(publishedAt);
  const messageFormatted = message.length ? message : DEFAULT_MSG_EMPTY_POST;
  const [allComments, setAllComments] = useState(['Fixed comment']);
  const [newComment, setNewComment] = useState('');

  function submitComment() {
    event.preventDefault();
    setAllComments([...allComments, newComment]);
    setNewComment('');
  }

  function handleNewComment() {
    setNewComment(event.target.value);
  }

  function removeComment(commentToBeRemoved) {
    const allCommentsWithoutRemovedComment = allComments.filter((comment) => {
      return comment !== commentToBeRemoved;
    });
    setAllComments(allCommentsWithoutRemovedComment);
    //TODO - implement comment removal by id
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
          {
            allComments.map((comment) => {
              return <Comments key={comment} content={comment} onRemove={removeComment} />
              //TODO - change key type to id
            })
          }
        </div>

      </footer>

    </article>

  )
}