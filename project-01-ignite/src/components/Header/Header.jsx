import styles from './Header.module.css'

import IgniteFeedIcon from '../../assets/icons/ignite-icon.svg'

export function Header() {
  return (
    <header className={styles.headerContent}>
      <img className={styles.headerImage} src={IgniteFeedIcon} alt="Ignite Feed Icon" />
      <p className={styles.headerTitle}>Ignite Feed - @dwtoledo</p>
    </header>
  )
}