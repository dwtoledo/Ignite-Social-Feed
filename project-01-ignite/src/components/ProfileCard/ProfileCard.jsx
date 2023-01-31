import { PencilSimple } from 'phosphor-react'

import styles from './ProfileCard.module.css'

export function ProfileCard() {
  return (
    <div className={styles.profileCardContent}>

      <div className={styles.profileCardHeader}>
        <img
          className={styles.profileCardCover}
          src="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          alt="Profile Cover Image"
        />
        <img
          className={styles.profileCardPicture}
          src="https://avatars.githubusercontent.com/u/11148858?v=4"
          alt="Profile Picture"
        />
      </div>

      <div className={styles.profileCardInfo}>
        <p className={styles.profileCardTitle}>Douglas Toledo</p>
        <p className={styles.profileCardSubtitle}>Frontend Developer</p>
      </div>

      <div className={styles.profileCardFooter}>
        <button className={styles.profileCardButton}>
          <PencilSimple size={20}/>
          <p>Editar seu perfil</p>
        </button>
      </div>

    </div>
  )
}