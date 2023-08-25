'use client'
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss'
import React, { useState, useEffect } from 'react';

export default function navbar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return(
        <header className={`${styles.container} ${scrolling ? styles.scrolling : ''}`}>
            <nav className={styles.nav}>
                <Link href={'/'}>
                    <Image
                        src={'/Logo.svg'}
                        className={styles.logo}
                        width={32}
                        height={32}
                        alt='NMES logo'
                    />
                </Link>
                <div className={styles.links}>
                    <Link className={styles.link} href={'/video'}>
                        Videos
                    </Link>
                    <Link className={styles.link} href={'/shop'}>
                        Shop
                    </Link>
                    <Link className={styles.link} href={'/academy'}>
                        Academy
                    </Link>
                    <Link className={styles.link} href={'/members'}>
                        Members
                    </Link>
                    <Link className={styles.link} href={'/contact'}>
                        Contact
                    </Link>
                </div>
                <div className={styles.btns}>
                    <Link className={styles.social} href={'https://www.facebook.com'}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0025 10.0625C20.0025 4.505 15.525 0 10.0025 0C4.4775 0.00125 0 4.505 0 10.0638C0 15.085 3.6575 19.2475 8.4375 20.0025V12.9713H5.9V10.0638H8.44V7.845C8.44 5.32375 9.93375 3.93125 12.2175 3.93125C13.3125 3.93125 14.4563 4.1275 14.4563 4.1275V6.6025H13.195C11.9538 6.6025 11.5663 7.37875 11.5663 8.175V10.0625H14.3388L13.8963 12.97H11.565V20.0013C16.345 19.2463 20.0025 15.0838 20.0025 10.0625Z" fill="#CCCCCC"/>
                        </svg>
                    </Link>
                    <Link className={styles.social} href={'https://www.youtube.com'}>
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3846 0H10.4902C11.4654 0.00355904 16.4065 0.0391496 17.7388 0.397426C18.1416 0.506769 18.5086 0.719901 18.8031 1.01552C19.0977 1.31114 19.3096 1.6789 19.4175 2.08204C19.5373 2.53285 19.6215 3.12958 19.6785 3.74529L19.6903 3.86867L19.7164 4.17712L19.7259 4.3005C19.803 5.38482 19.8125 6.40033 19.8137 6.62218V6.71115C19.8125 6.94131 19.8018 8.02562 19.7164 9.15502L19.7069 9.27959L19.6963 9.40297C19.6369 10.0816 19.5492 10.7554 19.4175 11.2513C19.3099 11.6546 19.0982 12.0225 18.8035 12.3182C18.5089 12.6139 18.1417 12.8269 17.7388 12.9359C16.3626 13.306 11.132 13.3321 10.4072 13.3333H10.2387C9.87214 13.3333 8.35599 13.3262 6.76629 13.2716L6.56461 13.2645L6.4614 13.2598L6.25853 13.2515L6.05567 13.2432C4.73882 13.185 3.48486 13.0913 2.90711 12.9347C2.50433 12.8258 2.13724 12.613 1.84263 12.3175C1.54801 12.0221 1.3362 11.6544 1.22843 11.2513C1.09674 10.7566 1.00895 10.0816 0.949636 9.40297L0.940145 9.2784L0.930654 9.15502C0.872105 8.35116 0.839661 7.5456 0.833374 6.73963L0.833374 6.59371C0.835747 6.33864 0.845237 5.45719 0.9093 4.48438L0.917605 4.36219L0.921164 4.3005L0.930654 4.17712L0.956754 3.86867L0.968617 3.74529C1.02556 3.12958 1.10979 2.53166 1.22961 2.08204C1.33721 1.67873 1.54893 1.31081 1.84356 1.01513C2.13819 0.719464 2.50537 0.506442 2.90829 0.397426C3.48604 0.243201 4.74001 0.148293 6.05685 0.0889758L6.25853 0.0806714L6.46258 0.0735536L6.56461 0.0699945L6.76747 0.0616901C7.89653 0.0253578 9.02604 0.00518773 10.1557 0.0011864H10.3846V0ZM8.42598 3.80817V9.52398L13.3576 6.66726L8.42598 3.80817Z" fill="#CCCCCC"/>
                        </svg>
                    </Link>
                    <button className={styles.login}>
                        Log In
                    </button>
                </div>
            </nav>
        </header>
    )
}