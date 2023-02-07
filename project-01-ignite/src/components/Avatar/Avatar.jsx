import styles from './Avatar.module.css'



import DEFAULT_PROFILE_IMAGE from '../../assets/images/default-profile.jpg'

export function Avatar({ hasBorder = true, src = DEFAULT_PROFILE_IMAGE, alt = '', width = 100, height = 100 }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}