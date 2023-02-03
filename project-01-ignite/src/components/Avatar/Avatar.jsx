import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', alt = '', width = 100, height = 100 }) {
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