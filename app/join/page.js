import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from './page.module.scss'

export const metadata = {
  title: 'Элсэх',
}

export default async function Page() {
  const [submittedDateTime, setSubmittedDateTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDateTime = new Date().toJSON().replace(/[TZ]/g, '_');

    setSubmittedDateTime(currentDateTime);
  };
  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <form className={styles.form} action="https://formsubmit.co/nmes.club@gmail.com" method="POST" onSubmit={handleSubmit}>
        <div className={styles.section}>
          <h2 className={styles.ttitle}>Элсэх хүсэлт</h2>
          <p className={styles.description}>Энэхүү формыг бөглөснөөр бид тантай эргүүлэн холбогдох болно</p>
          <input type="hidden" name="_next" value={`https://nmes.vercel.app/join/${submittedDateTime}`}/>
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
  )
}

