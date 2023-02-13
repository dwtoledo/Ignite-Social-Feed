import { Avatar } from '../Avatar/Avatar'
import { TrashSimple, ThumbsUp } from 'phosphor-react'
import { useState } from 'react';

import moment from 'moment';
import styles from './Comments.module.css'

const now = new Date();

export function Comments({
  onRemove,
  id,
  content = '',
  commentedAt = now.toISOString(),
  avatarUrl,
  authorName = 'User unknow',
  isPostCreator = false }) {

  const commentedAtFormatted = moment(commentedAt);
  const [clapCount, setClapCount] = useState(0);

  function handleRemoveComment() {
    onRemove(id);
  }

  function handleClapComment() {
    setClapCount((state) => state + 1);
  }

  return (<div className={styles.commentWrapper}>

    <Avatar
      src={avatarUrl}
      alt="Picture of person who wrote a comment"
      width={60}
      height={60}
      hasBorder={false}
    />

    <div className={styles.commentCard}>

      <div className={styles.commentCardBox}>

        <header className={styles.commentCardHeader}>
          <div className={styles.commentCardInfo}>
            <strong>
              {authorName}
              {isPostCreator ? ' (you)' : ''}
            </strong>

            <time
              title={commentedAtFormatted.format("[Commented on] L LT")}
              dateTime={commentedAtFormatted.toISOString()}>
              Commented {commentedAtFormatted.from(moment())}:
            </time>

          </div>
          <button title='Remove this comment.' onClick={handleRemoveComment}>
            <TrashSimple size={20} weight='bold' />
          </button>
        </header>

        <p className={styles.commentCardMessage}>
          {content}
        </p>

      </div>

      <button
        className={styles.commentCardLikeButton}
        onClick={handleClapComment}>
        <ThumbsUp size={20} />
        Clap
        <span>{clapCount}</span>
      </button>
    </div>

  </div>)
}