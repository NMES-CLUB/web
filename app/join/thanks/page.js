import styles from '../page.module.scss'

export const metadata = {
  title: 'thanks',
}

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.center}>
          <h3 className={styles.thanks_h3}>Таны илгээсэн хүсэлтийг бид хүлээн авлаа баярлалаа!</h3>
        </div>
      </div>
    </main>
  )
}
