import styles from './PostCard.module.css'

export function PostCard() {
  return (
    <article className={styles.postCard}>

      <header>
        <div className={styles.postCardAuthor}>

          <img
            className={styles.postCardPicture}
            src="https://avatars.githubusercontent.com/u/11148858?v=4"
            alt="Profile Picture"
          />

          <div className={styles.postCardAuthorInfo}>
            <strong>Douglas Toledo</strong>
            <span>Frontend Developer</span>
          </div>
        </div>

        <time
          title='Published on 02/02/2023 at 09:45hrs'
          dateTime='2023-02-02 09:45:30'>
          Published 1h ago:
        </time>

      </header>

      <div className={styles.postCardMessage}>
        <p>Hello everyone 👋</p>
        <br></br>
        <p>I just pushed a new project to my Github.</p>
        <p>This is the first project I made from Rocketseat Ignite Course 🚀</p>
        <br></br>
        <p>Check it out on 👉 {' '}
          <a href='https://github.com/dwtoledo/project-01-ignite'
            target='_blank'>
            https://github.com/dwtoledo/project-01-ignite
          </a>
        </p>
        <a href='https://github.com/search?q=newproject&type=topics' target='_blank'>#newproject</a>{' '}
        <a href='https://github.com/search?q=reactjs&type=topics' target='_blank'>#reactjs</a>{' '}
        <a href='https://github.com/search?q=frontend&type=topics' target='_blank'>#frontend</a>{' '}
        <a href='https://github.com/search?q=ignite&type=topics' target='_blank'>#ignite</a>{' '}
        <a href='https://github.com/search?q=rocketseat&type=topics' target='_blank'>#rocketseat</a>
      </div>
    </article>

  )
}