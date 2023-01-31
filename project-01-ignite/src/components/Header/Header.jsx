import styles from './Header.module.css'

import IgniteFeedIcon from '../../assets/icons/ignite-icon.svg'

export function Header() {
  return (
    <header className={styles.headerContent}>
      <img src={IgniteFeedIcon} alt="Ignite Feed Icon" />
      <p>Ignite Feed - @dwtoledo</p>
    </header>
  )
}