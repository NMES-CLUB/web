import Image from 'next/image'
import styles from './page.module.scss'

export default function NotFoundPage() {
  return (
    <main className={styles.main}>
      <div className={styles.nf_center}>
        <h1 className={styles.nf_title}>Тун удахгүй</h1>
      </div>
    </main>
  )
}
