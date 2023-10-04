'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from '../page.module.scss'

export const metadata = {
  title: 'thanks',
}
export default function Page({ params }) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.center}>
          <h3 className={styles.thanks_h3}>Таны илгээсэн хүсэлтийг бид хүлээн авлаа баярлалаа!</h3>
          <p className={styles.thanks_p}>Submit code: {params.slug}</p>
        </div>
      </div>
    </main>
  )
}
