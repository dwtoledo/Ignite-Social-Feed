import { Avatar } from '../Avatar/Avatar'
import { TrashSimple, ThumbsUp } from 'phosphor-react'
import { useState } from 'react';

import moment from 'moment';
import styles from './Comments.module.css'

const now = new Date();
const DEFAULT_MSG_EMPTY_COMMENT = 'This comment has no message.'

export function Comments({ dataSource, onRemove }) {

  const commentedAtFormatted = isValidDate(dataSource.commentedAt) ? moment(dataSource.commentedAt) : moment();
  const [clapCount, setClapCount] = useState(0);

  function isValidDate(dateString) {
    let date = new Date(dateString);
    return !isNaN(date.getTime());
  }

  function handleRemoveComment() {
    onRemove(dataSource.id);
  }

  function handleClapComment() {
    setClapCount((state) => state + 1);
  }

  return (<div className={styles.commentWrapper}>

    <Avatar
      src={dataSource.author.avatarUrl}
      alt="Avatar of person who wrote a comment"
      width={60}
      height={60}
      hasBorder={false}
    />

    <div className={styles.commentCard}>

      <div className={styles.commentCardBox}>

        <header className={styles.commentCardHeader}>

          <div className={styles.commentCardInfo}>

            <strong>
              {dataSource.author.name?.length ? dataSource.author.name : 'User unknow'}
              {dataSource.author.isPostCreator ? ' (you)' : ''}
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
          {dataSource.content.length ? dataSource.content : DEFAULT_MSG_EMPTY_COMMENT}
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