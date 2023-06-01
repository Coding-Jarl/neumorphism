'use client'
import { useState } from 'react'
import styles from '@/styles/components/Sample.module.scss'

export default function Sample() {
  const [isChecked, setIsChecked] = useState(false)
  const toggleCheck = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div className={styles.Sample}>
      <label>
        <input type="checkbox" checked={isChecked} onClick={toggleCheck} />
        <div
          className={[
            isChecked && styles.pressed,
            styles.block,
            styles.button,
          ].join(' ')}
        >
          Owi
        </div>
      </label>
      <hr />
      <div className={styles.gallery}>
        <div className={[styles.block].join(' ')}>Owi</div>
        <div className={[styles.block, styles.circle].join(' ')}>Owi</div>
        <div className={[styles.block, styles.withColorBG].join(' ')}>Owi</div>
        <div
          className={[styles.block, styles.circle, styles.withColorBG].join(
            ' '
          )}
        >
          Owi
        </div>
        <div className={[styles.block, styles.withImgBG].join(' ')}>Owi</div>
        <div
          className={[styles.block, styles.circle, styles.withImgBG].join(' ')}
        >
          Owi
        </div>
      </div>
    </div>
  )
}
