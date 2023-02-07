import { Avatar } from '../Avatar/Avatar'
import { Comments } from '../Comments/Comments'

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

        <form className={styles.postCardForm} autoComplete="off">
          <strong>Leave your feedback</strong>
          <textarea name="feedback-form" id="feedback-form" placeholder='Write a comment...'></textarea>
          <div className={styles.postCardButtonWrapper}>
            <button type="submit">Comment</button>
          </div>
        </form>

        <div className={styles.postCardComments}>
          <Comments />
          <Comments />
        </div>

      </footer>

    </article>

  )
}