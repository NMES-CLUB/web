'use client'
import Image from 'next/image'
import Link from 'next/link';
import styles from './page.module.scss'
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <div className={styles.container}>
          <div className={styles.grd1}>
            <h1 className={styles.moto}>
              Capturing Moments<br/>
              Creating Memories
            </h1>
            <div className={styles.join_back}>
              <Link href={'/'}>
                <div className={styles.join_button}>
                  Join Us
                </div>
              </Link>
            </div>
          </div>
          {/* <Spline className={styles.spline} scene="https://prod.spline.design/xE1a5QAopo0Ww7TS/scene.splinecode" /> */}
        </div>
      </section>
      <section className={styles.section2}>

      </section>
    </main>
  )
}
