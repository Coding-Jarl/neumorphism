import styles from './style.module.scss'

export default function Sample() {
  return (
    <div className={styles.Sample}>
      <div className={[styles.square].join(' ')}>Owi</div>
      <div className={[styles.circle].join(' ')}>Owi</div>
      <div className={[styles.square].join(' ')}>Owi</div>
      <div className={[styles.circle].join(' ')}>Owi</div>
    </div>
  )
}
