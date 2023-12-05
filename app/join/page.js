
import styles from './page.module.scss'
import Head from 'next/head';

export const metadata = {
  title: 'Элсэх',
}

export default async function Page() {
  return (
  <>
    <main className={styles.main}>
      <div className={styles.container}>
      <form className={styles.form} action="https://formsubmit.co/3689a75405b34d9041966f2c5af058f0" method="POST">
        <div className={styles.section}>
          <h2 className={styles.ttitle}>Элсэх хүсэлт</h2>
          <p className={styles.description}>Энэхүү формыг бөглөснөөр бид тантай эргүүлэн холбогдох болно</p>
          <input type="hidden" name="_next" value={`https://nmes.vercel.app/join/thanks`}/>
          <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_template" value="table"/>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>Нэр</h2>
          <input className={styles.input} type="text" name="name" placeholder="З.Даваацэрэн г.м" required/>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>Анги</h2>
          <input className={styles.input} type="text" name="class" placeholder="106-1 г.м" required/>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>Имэйл хаяг</h2>
          <input className={styles.input} type="email" name="email" placeholder="se14d01@nmit.edu.mn г.м" required/>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>Яагаад манай клубт элсэх хүсэлтэй байгаа вэ?</h2>
          <textarea className={`${styles.input} ${styles.textarea}`} type="text" name="response" placeholder="Хүссэнээ бич" required/>
        </div>
        <button className={styles.submit} type="submit">Илгээх</button>
      </form>
      </div>
    </main>
    </>
  )
}

