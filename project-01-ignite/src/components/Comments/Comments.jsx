import { TrashSimple, ThumbsUp } from 'phosphor-react'
import styles from './Comments.module.css'
import { Avatar } from '../Avatar/Avatar'

export function Comments() {
  return (<div className={styles.commentWrapper}>

    <Avatar
      src="https://avatars.githubusercontent.com/u/1020826?v=4"
      alt="Picture of person who wrote a comment"
      width={60}
      height={60}
      hasBorder={false}
    />

    <div className={styles.commentCard}>

      <div className={styles.commentCardBox}>

        <header className={styles.commentCardHeader}>
          <div className={styles.commentCardInfo}>
            <strong>Adiel Seffrin</strong>
            <time
              title='Commented on 03/02/2023 at 08:42hrs'
              dateTime='2023-02-03 08:42:45'>
              Cerca de 2h
            </time>
          </div>
          <button title='Remove this comment.'>
            <TrashSimple size={20} weight='bold' />
          </button>
        </header>

        <p className={styles.commentCardMessage}>Very good Douglas, congratz!! 👏👏</p>

      </div>

      <button className={styles.commentCardLikeButton}>
        <ThumbsUp size={20} />
        Aplaudir
        <span>20</span>
      </button>
    </div>

  </div>)
}