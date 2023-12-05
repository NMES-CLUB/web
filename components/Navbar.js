'use client'
import Image from 'next/image';
import Link from 'next/link';
import styles from "./Components.module.scss"
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import SigninButton from './SigninButton';

export default function navbar() {

    const links = [
      'videos',
      'shop',
      'academy',
      'contact',
      // 'about-us'
    ];

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

    const currentPathname = usePathname();

    return (
      <header className={`${styles.container} ${scrolling ? styles.scrolling : ""}`}>
        <nav className={styles.nav_desktop}>
          <div className={styles.t1}>
            <Link href={"/"}>
              <div className={styles.logo}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10.6667C0 4.77563 4.77563 0 10.6667 0H21.3333C27.2244 0 32 4.77563 32 10.6667V21.3333C32 27.2244 27.2244 32 21.3333 32H10.6667C4.77563 32 0 27.2244 0 21.3333V10.6667Z"
                    fill="#1F1F1F"
                  />
                  <path
                    className={styles.letter}
                    d="M6.66528 14.8092H8.46641V9.74842L12.549 14.8092H14.17V6.66544H12.3689V11.7262L8.2863 6.66544H6.66528V14.8092Z"
                    fill="white"
                  />
                  <path
                    className={styles.letter}
                    d="M16.3276 14.8092H18.1287V9.45757L20.8304 12.7151L23.5321 9.45757V14.8092H25.3333V6.66544H23.7122L20.8304 10.1556L17.9486 6.66544H16.3276V14.8092Z"
                    fill="white"
                  />
                  <path
                    className={styles.letter}
                    d="M6.66528 25.1601H13.0319V23.532H8.46717V21.7876H11.9508V20.2176H8.46717V18.6477H12.9118V17.0196H6.66528V25.1601Z"
                    fill="white"
                  />
                  <path
                    className={styles.letter}
                    d="M15.0272 24.0553C15.2434 24.2996 15.5077 24.5089 15.832 24.695C16.3726 25.0206 17.1774 25.3346 18.2706 25.3346C20.2526 25.3346 21.4539 24.1716 21.4539 22.8343C21.4539 19.9967 17.2495 20.613 17.2495 19.2291C17.2495 18.764 17.5978 18.4151 18.5108 18.4151C18.9913 18.4151 19.3757 18.5895 19.652 18.764C19.8082 18.8686 19.9403 18.9849 20.0724 19.1129L21.2737 17.9499C21.0695 17.7522 20.8412 17.5661 20.565 17.4033C20.0965 17.1242 19.3757 16.8451 18.4507 16.8451C16.5287 16.8451 15.3875 17.9499 15.3875 19.2291C15.3875 22.0667 19.5919 21.4504 19.5919 22.8343C19.5919 23.3576 19.1715 23.7646 18.2105 23.7646C17.5738 23.7646 17.0813 23.5553 16.745 23.3343C16.5407 23.2064 16.3726 23.0552 16.2284 22.8924L15.0272 24.0553Z"
                    fill="white"
                  />
                  <path
                    className={styles.letter}
                    d="M23.4112 24.3461C23.4112 24.8694 23.8317 25.2764 24.3722 25.2764C24.9128 25.2764 25.3333 24.8694 25.3333 24.3461C25.3333 23.8228 24.9128 23.4157 24.3722 23.4157C23.8317 23.4157 23.4112 23.8228 23.4112 24.3461Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
            <div className={styles.links}>
              <p style={{display: 'none'}}>{currentPathname}</p>
              {links.map((name) => {
                return (
                  <Link
                    className={` ${styles.link} ${
                      currentPathname == `/${name}`
                        ? styles.currentpath
                        : styles.href
                    }`}
                    href={`/${name}`}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={styles.btns}>
            <Link className={styles.btn} href={"https://www.instagram.com/nmes_nmit"}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_159_872)">
                  <path
                    d="M10.0001 0C7.28637 0 6.94512 0.0125 5.87887 0.06C4.81262 0.11 4.08637 0.2775 3.45012 0.525C2.78274 0.776024 2.17824 1.16978 1.67887 1.67875C1.17022 2.17837 0.776506 2.7828 0.525122 3.45C0.277622 4.085 0.108872 4.8125 0.0601221 5.875C0.0126221 6.94375 0.00012207 7.28375 0.00012207 10.0013C0.00012207 12.7163 0.0126221 13.0563 0.0601221 14.1225C0.110122 15.1875 0.277622 15.9137 0.525122 16.55C0.781372 17.2075 1.12262 17.765 1.67887 18.3212C2.23387 18.8775 2.79137 19.22 3.44887 19.475C4.08637 19.7225 4.81137 19.8912 5.87637 19.94C6.94387 19.9875 7.28387 20 10.0001 20C12.7164 20 13.0551 19.9875 14.1226 19.94C15.1864 19.89 15.9151 19.7225 16.5514 19.475C17.2183 19.2239 17.8224 18.8301 18.3214 18.3212C18.8776 17.765 19.2189 17.2075 19.4751 16.55C19.7214 15.9137 19.8901 15.1875 19.9401 14.1225C19.9876 13.0563 20.0001 12.7163 20.0001 10C20.0001 7.28375 19.9876 6.94375 19.9401 5.87625C19.8901 4.8125 19.7214 4.085 19.4751 3.45C19.2238 2.78278 18.8301 2.17834 18.3214 1.67875C17.8222 1.16959 17.2176 0.775807 16.5501 0.525C15.9126 0.2775 15.1851 0.10875 14.1214 0.06C13.0539 0.0125 12.7151 0 9.99762 0H10.0014H10.0001ZM9.10387 1.8025H10.0014C12.6714 1.8025 12.9876 1.81125 14.0414 1.86C15.0164 1.90375 15.5464 2.0675 15.8989 2.20375C16.3651 2.385 16.6989 2.6025 17.0489 2.9525C17.3989 3.3025 17.6151 3.635 17.7964 4.1025C17.9339 4.45375 18.0964 4.98375 18.1401 5.95875C18.1889 7.0125 18.1989 7.32875 18.1989 9.9975C18.1989 12.6663 18.1889 12.9837 18.1401 14.0375C18.0964 15.0125 17.9326 15.5413 17.7964 15.8938C17.636 16.3279 17.3802 16.7205 17.0476 17.0425C16.6976 17.3925 16.3651 17.6088 15.8976 17.79C15.5476 17.9275 15.0176 18.09 14.0414 18.135C12.9876 18.1825 12.6714 18.1938 10.0014 18.1938C7.33137 18.1938 7.01387 18.1825 5.96012 18.135C4.98512 18.09 4.45637 17.9275 4.10387 17.79C3.6695 17.6299 3.27653 17.3745 2.95387 17.0425C2.62106 16.72 2.36478 16.3271 2.20387 15.8925C2.06762 15.5412 1.90387 15.0113 1.86012 14.0363C1.81262 12.9825 1.80262 12.6662 1.80262 9.995C1.80262 7.325 1.81262 7.01 1.86012 5.95625C1.90512 4.98125 2.06762 4.45125 2.20512 4.09875C2.38637 3.6325 2.60387 3.29875 2.95387 2.94875C3.30387 2.59875 3.63637 2.3825 4.10387 2.20125C4.45637 2.06375 4.98512 1.90125 5.96012 1.85625C6.88262 1.81375 7.24012 1.80125 9.10387 1.8V1.8025ZM15.3389 3.4625C15.1813 3.4625 15.0252 3.49354 14.8797 3.55384C14.7341 3.61415 14.6018 3.70254 14.4903 3.81397C14.3789 3.9254 14.2905 4.05769 14.2302 4.20328C14.1699 4.34887 14.1389 4.50491 14.1389 4.6625C14.1389 4.82009 14.1699 4.97613 14.2302 5.12172C14.2905 5.26731 14.3789 5.3996 14.4903 5.51103C14.6018 5.62246 14.7341 5.71085 14.8797 5.77116C15.0252 5.83146 15.1813 5.8625 15.3389 5.8625C15.6571 5.8625 15.9624 5.73607 16.1874 5.51103C16.4124 5.28598 16.5389 4.98076 16.5389 4.6625C16.5389 4.34424 16.4124 4.03902 16.1874 3.81397C15.9624 3.58893 15.6571 3.4625 15.3389 3.4625ZM10.0014 4.865C9.32021 4.85437 8.64374 4.97936 8.01134 5.23268C7.37895 5.486 6.80327 5.86259 6.31781 6.34053C5.83235 6.81847 5.44683 7.38821 5.18367 8.01657C4.92052 8.64494 4.785 9.31938 4.785 10.0006C4.785 10.6819 4.92052 11.3563 5.18367 11.9847C5.44683 12.613 5.83235 13.1828 6.31781 13.6607C6.80327 14.1387 7.37895 14.5153 8.01134 14.7686C8.64374 15.0219 9.32021 15.1469 10.0014 15.1363C11.3495 15.1152 12.6354 14.5649 13.5813 13.6041C14.5273 12.6432 15.0575 11.349 15.0575 10.0006C15.0575 8.65228 14.5273 7.35802 13.5813 6.39719C12.6354 5.43636 11.3495 4.88603 10.0014 4.865ZM10.0014 6.66625C10.8855 6.66625 11.7335 7.01748 12.3587 7.64268C12.9839 8.26788 13.3351 9.11583 13.3351 10C13.3351 10.8842 12.9839 11.7321 12.3587 12.3573C11.7335 12.9825 10.8855 13.3337 10.0014 13.3337C9.11721 13.3337 8.26925 12.9825 7.64405 12.3573C7.01886 11.7321 6.66762 10.8842 6.66762 10C6.66762 9.11583 7.01886 8.26788 7.64405 7.64268C8.26925 7.01748 9.11721 6.66625 10.0014 6.66625Z"
                    fill="#1f1f1f"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_159_872">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link className={styles.btn} href={"https://www.facebook.com/profile.php?id=100088219064440"}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0025 10.0625C20.0025 4.505 15.525 0 10.0025 0C4.4775 0.00125 0 4.505 0 10.0638C0 15.085 3.6575 19.2475 8.4375 20.0025V12.9713H5.9V10.0638H8.44V7.845C8.44 5.32375 9.93375 3.93125 12.2175 3.93125C13.3125 3.93125 14.4563 4.1275 14.4563 4.1275V6.6025H13.195C11.9538 6.6025 11.5663 7.37875 11.5663 8.175V10.0625H14.3388L13.8963 12.97H11.565V20.0013C16.345 19.2463 20.0025 15.0838 20.0025 10.0625Z"
                  fill="#1f1f1f"
                />
              </svg>
            </Link>
            <Link className={styles.btn} href={"https://www.youtube.com/@nmes2022"}>
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3846 0H10.4902C11.4654 0.00355904 16.4065 0.0391496 17.7388 0.397426C18.1416 0.506769 18.5086 0.719901 18.8031 1.01552C19.0977 1.31114 19.3096 1.6789 19.4175 2.08204C19.5373 2.53285 19.6215 3.12958 19.6785 3.74529L19.6903 3.86867L19.7164 4.17712L19.7259 4.3005C19.803 5.38482 19.8125 6.40033 19.8137 6.62218V6.71115C19.8125 6.94131 19.8018 8.02562 19.7164 9.15502L19.7069 9.27959L19.6963 9.40297C19.6369 10.0816 19.5492 10.7554 19.4175 11.2513C19.3099 11.6546 19.0982 12.0225 18.8035 12.3182C18.5089 12.6139 18.1417 12.8269 17.7388 12.9359C16.3626 13.306 11.132 13.3321 10.4072 13.3333H10.2387C9.87214 13.3333 8.35599 13.3262 6.76629 13.2716L6.56461 13.2645L6.4614 13.2598L6.25853 13.2515L6.05567 13.2432C4.73882 13.185 3.48486 13.0913 2.90711 12.9347C2.50433 12.8258 2.13724 12.613 1.84263 12.3175C1.54801 12.0221 1.3362 11.6544 1.22843 11.2513C1.09674 10.7566 1.00895 10.0816 0.949636 9.40297L0.940145 9.2784L0.930654 9.15502C0.872105 8.35116 0.839661 7.5456 0.833374 6.73963L0.833374 6.59371C0.835747 6.33864 0.845237 5.45719 0.9093 4.48438L0.917605 4.36219L0.921164 4.3005L0.930654 4.17712L0.956754 3.86867L0.968617 3.74529C1.02556 3.12958 1.10979 2.53166 1.22961 2.08204C1.33721 1.67873 1.54893 1.31081 1.84356 1.01513C2.13819 0.719464 2.50537 0.506442 2.90829 0.397426C3.48604 0.243201 4.74001 0.148293 6.05685 0.0889758L6.25853 0.0806714L6.46258 0.0735536L6.56461 0.0699945L6.76747 0.0616901C7.89653 0.0253578 9.02604 0.00518773 10.1557 0.0011864H10.3846V0ZM8.42598 3.80817V9.52398L13.3576 6.66726L8.42598 3.80817Z"
                  fill="#1f1f1f"
                />
              </svg>
            </Link>
            {/* <Link className={`${styles.btn} ${styles.btn_join}`} href={'/join'}>
              Элсэх
            </Link> */}
            <SigninButton/>
          </div>
        </nav>
        <nav className={styles.nav_mobile}>
          <input type="checkbox" id="sub_nav" className={styles.sub_nav_check}/>

          <div className={styles.top}>
            <div className={styles.grid_item1}>
              <label className={styles.sub_nav_toggle} htmlFor={'sub_nav'}>
                <div className={styles.icon}>
                  <svg className={styles.svg} width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.64717 9.31211C9.12654 9.83721 8.28104 9.83721 7.76041 9.31211L1.09634 2.59092C0.575715 2.06583 0.575715 1.21308 1.09634 0.687987C1.61697 0.162894 2.46248 0.162894 2.98311 0.687987L8.70587 6.45981L14.4286 0.692189C14.9493 0.167096 15.7948 0.167096 16.3154 0.692189C16.836 1.21728 16.836 2.07003 16.3154 2.59513L9.65134 9.31631L9.64717 9.31211Z" fill="black"/>
                  </svg>
                </div>
              </label>
            </div>
            <div className={styles.grid_item2}>
            <Link href={"/"}>
              <div className={styles.logo}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10.6667C0 4.77563 4.77563 0 10.6667 0H21.3333C27.2244 0 32 4.77563 32 10.6667V21.3333C32 27.2244 27.2244 32 21.3333 32H10.6667C4.77563 32 0 27.2244 0 21.3333V10.6667Z"
                    fill="#1F1F1F"
                  />
                  <path
                    className={styles.letter}
                    d="M6.66528 14.8092H8.46641V9.74842L12.549 14.8092H14.17V6.66544H12.3689V11.7262L8.2863 6.66544H6.66528V14.8092Z"
                    fill="white"
                  />
                  <path
                    className={styles.letter}
                    d="M16.3276 14.8092H18.1287V9.45757L20.8304 12.7151L23.5321 9.45757V14.8092H25.3333V6.66544H23.7122L20.8304 10.1556L17.9486 6.66544H16.3276V14.8092Z"
                    fill="white"
                  />
                  <path
                    className={styles.letter}
                    d="M6.66528 25.1601H13.0319V23.532H8.46717V21.7876H11.9508V20.2176H8.46717V18.6477H12.9118V17.0196H6.66528V25.1601Z"
                    fill="white"
                  />
                  <path
                    className={styles.letter}
                    d="M15.0272 24.0553C15.2434 24.2996 15.5077 24.5089 15.832 24.695C16.3726 25.0206 17.1774 25.3346 18.2706 25.3346C20.2526 25.3346 21.4539 24.1716 21.4539 22.8343C21.4539 19.9967 17.2495 20.613 17.2495 19.2291C17.2495 18.764 17.5978 18.4151 18.5108 18.4151C18.9913 18.4151 19.3757 18.5895 19.652 18.764C19.8082 18.8686 19.9403 18.9849 20.0724 19.1129L21.2737 17.9499C21.0695 17.7522 20.8412 17.5661 20.565 17.4033C20.0965 17.1242 19.3757 16.8451 18.4507 16.8451C16.5287 16.8451 15.3875 17.9499 15.3875 19.2291C15.3875 22.0667 19.5919 21.4504 19.5919 22.8343C19.5919 23.3576 19.1715 23.7646 18.2105 23.7646C17.5738 23.7646 17.0813 23.5553 16.745 23.3343C16.5407 23.2064 16.3726 23.0552 16.2284 22.8924L15.0272 24.0553Z"
                    fill="white"
                  />
                  <path
                    className={styles.letter}
                    d="M23.4112 24.3461C23.4112 24.8694 23.8317 25.2764 24.3722 25.2764C24.9128 25.2764 25.3333 24.8694 25.3333 24.3461C25.3333 23.8228 24.9128 23.4157 24.3722 23.4157C23.8317 23.4157 23.4112 23.8228 23.4112 24.3461Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
            </div>
            <div className={styles.grid_item3}>
              <SigninButton/>
            </div>
          </div>
          <div className={styles.drop}>
            <div className={styles.links}>
              {links.map((name) => {
                return (
                  <Link
                    className={` ${styles.link} ${
                      currentPathname == `/${name}`
                        ? styles.currentpath
                        : styles.href
                    }`}
                    href={`/${name}`}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
            <div className={styles.social}>
              <Link className={styles.btn} href={"https://www.instagram.com/nmes_nmit/"}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_159_872)">
                    <path
                      d="M10.0001 0C7.28637 0 6.94512 0.0125 5.87887 0.06C4.81262 0.11 4.08637 0.2775 3.45012 0.525C2.78274 0.776024 2.17824 1.16978 1.67887 1.67875C1.17022 2.17837 0.776506 2.7828 0.525122 3.45C0.277622 4.085 0.108872 4.8125 0.0601221 5.875C0.0126221 6.94375 0.00012207 7.28375 0.00012207 10.0013C0.00012207 12.7163 0.0126221 13.0563 0.0601221 14.1225C0.110122 15.1875 0.277622 15.9137 0.525122 16.55C0.781372 17.2075 1.12262 17.765 1.67887 18.3212C2.23387 18.8775 2.79137 19.22 3.44887 19.475C4.08637 19.7225 4.81137 19.8912 5.87637 19.94C6.94387 19.9875 7.28387 20 10.0001 20C12.7164 20 13.0551 19.9875 14.1226 19.94C15.1864 19.89 15.9151 19.7225 16.5514 19.475C17.2183 19.2239 17.8224 18.8301 18.3214 18.3212C18.8776 17.765 19.2189 17.2075 19.4751 16.55C19.7214 15.9137 19.8901 15.1875 19.9401 14.1225C19.9876 13.0563 20.0001 12.7163 20.0001 10C20.0001 7.28375 19.9876 6.94375 19.9401 5.87625C19.8901 4.8125 19.7214 4.085 19.4751 3.45C19.2238 2.78278 18.8301 2.17834 18.3214 1.67875C17.8222 1.16959 17.2176 0.775807 16.5501 0.525C15.9126 0.2775 15.1851 0.10875 14.1214 0.06C13.0539 0.0125 12.7151 0 9.99762 0H10.0014H10.0001ZM9.10387 1.8025H10.0014C12.6714 1.8025 12.9876 1.81125 14.0414 1.86C15.0164 1.90375 15.5464 2.0675 15.8989 2.20375C16.3651 2.385 16.6989 2.6025 17.0489 2.9525C17.3989 3.3025 17.6151 3.635 17.7964 4.1025C17.9339 4.45375 18.0964 4.98375 18.1401 5.95875C18.1889 7.0125 18.1989 7.32875 18.1989 9.9975C18.1989 12.6663 18.1889 12.9837 18.1401 14.0375C18.0964 15.0125 17.9326 15.5413 17.7964 15.8938C17.636 16.3279 17.3802 16.7205 17.0476 17.0425C16.6976 17.3925 16.3651 17.6088 15.8976 17.79C15.5476 17.9275 15.0176 18.09 14.0414 18.135C12.9876 18.1825 12.6714 18.1938 10.0014 18.1938C7.33137 18.1938 7.01387 18.1825 5.96012 18.135C4.98512 18.09 4.45637 17.9275 4.10387 17.79C3.6695 17.6299 3.27653 17.3745 2.95387 17.0425C2.62106 16.72 2.36478 16.3271 2.20387 15.8925C2.06762 15.5412 1.90387 15.0113 1.86012 14.0363C1.81262 12.9825 1.80262 12.6662 1.80262 9.995C1.80262 7.325 1.81262 7.01 1.86012 5.95625C1.90512 4.98125 2.06762 4.45125 2.20512 4.09875C2.38637 3.6325 2.60387 3.29875 2.95387 2.94875C3.30387 2.59875 3.63637 2.3825 4.10387 2.20125C4.45637 2.06375 4.98512 1.90125 5.96012 1.85625C6.88262 1.81375 7.24012 1.80125 9.10387 1.8V1.8025ZM15.3389 3.4625C15.1813 3.4625 15.0252 3.49354 14.8797 3.55384C14.7341 3.61415 14.6018 3.70254 14.4903 3.81397C14.3789 3.9254 14.2905 4.05769 14.2302 4.20328C14.1699 4.34887 14.1389 4.50491 14.1389 4.6625C14.1389 4.82009 14.1699 4.97613 14.2302 5.12172C14.2905 5.26731 14.3789 5.3996 14.4903 5.51103C14.6018 5.62246 14.7341 5.71085 14.8797 5.77116C15.0252 5.83146 15.1813 5.8625 15.3389 5.8625C15.6571 5.8625 15.9624 5.73607 16.1874 5.51103C16.4124 5.28598 16.5389 4.98076 16.5389 4.6625C16.5389 4.34424 16.4124 4.03902 16.1874 3.81397C15.9624 3.58893 15.6571 3.4625 15.3389 3.4625ZM10.0014 4.865C9.32021 4.85437 8.64374 4.97936 8.01134 5.23268C7.37895 5.486 6.80327 5.86259 6.31781 6.34053C5.83235 6.81847 5.44683 7.38821 5.18367 8.01657C4.92052 8.64494 4.785 9.31938 4.785 10.0006C4.785 10.6819 4.92052 11.3563 5.18367 11.9847C5.44683 12.613 5.83235 13.1828 6.31781 13.6607C6.80327 14.1387 7.37895 14.5153 8.01134 14.7686C8.64374 15.0219 9.32021 15.1469 10.0014 15.1363C11.3495 15.1152 12.6354 14.5649 13.5813 13.6041C14.5273 12.6432 15.0575 11.349 15.0575 10.0006C15.0575 8.65228 14.5273 7.35802 13.5813 6.39719C12.6354 5.43636 11.3495 4.88603 10.0014 4.865ZM10.0014 6.66625C10.8855 6.66625 11.7335 7.01748 12.3587 7.64268C12.9839 8.26788 13.3351 9.11583 13.3351 10C13.3351 10.8842 12.9839 11.7321 12.3587 12.3573C11.7335 12.9825 10.8855 13.3337 10.0014 13.3337C9.11721 13.3337 8.26925 12.9825 7.64405 12.3573C7.01886 11.7321 6.66762 10.8842 6.66762 10C6.66762 9.11583 7.01886 8.26788 7.64405 7.64268C8.26925 7.01748 9.11721 6.66625 10.0014 6.66625Z"
                      fill="#1f1f1f"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_159_872">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link className={styles.btn} href={"https://www.facebook.com/profile.php?id=100088219064440"}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.0025 10.0625C20.0025 4.505 15.525 0 10.0025 0C4.4775 0.00125 0 4.505 0 10.0638C0 15.085 3.6575 19.2475 8.4375 20.0025V12.9713H5.9V10.0638H8.44V7.845C8.44 5.32375 9.93375 3.93125 12.2175 3.93125C13.3125 3.93125 14.4563 4.1275 14.4563 4.1275V6.6025H13.195C11.9538 6.6025 11.5663 7.37875 11.5663 8.175V10.0625H14.3388L13.8963 12.97H11.565V20.0013C16.345 19.2463 20.0025 15.0838 20.0025 10.0625Z"
                    fill="#1f1f1f"
                  />
                </svg>
              </Link>
              <Link className={styles.btn} href={"https://www.youtube.com/@nmes2022"}>
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3846 0H10.4902C11.4654 0.00355904 16.4065 0.0391496 17.7388 0.397426C18.1416 0.506769 18.5086 0.719901 18.8031 1.01552C19.0977 1.31114 19.3096 1.6789 19.4175 2.08204C19.5373 2.53285 19.6215 3.12958 19.6785 3.74529L19.6903 3.86867L19.7164 4.17712L19.7259 4.3005C19.803 5.38482 19.8125 6.40033 19.8137 6.62218V6.71115C19.8125 6.94131 19.8018 8.02562 19.7164 9.15502L19.7069 9.27959L19.6963 9.40297C19.6369 10.0816 19.5492 10.7554 19.4175 11.2513C19.3099 11.6546 19.0982 12.0225 18.8035 12.3182C18.5089 12.6139 18.1417 12.8269 17.7388 12.9359C16.3626 13.306 11.132 13.3321 10.4072 13.3333H10.2387C9.87214 13.3333 8.35599 13.3262 6.76629 13.2716L6.56461 13.2645L6.4614 13.2598L6.25853 13.2515L6.05567 13.2432C4.73882 13.185 3.48486 13.0913 2.90711 12.9347C2.50433 12.8258 2.13724 12.613 1.84263 12.3175C1.54801 12.0221 1.3362 11.6544 1.22843 11.2513C1.09674 10.7566 1.00895 10.0816 0.949636 9.40297L0.940145 9.2784L0.930654 9.15502C0.872105 8.35116 0.839661 7.5456 0.833374 6.73963L0.833374 6.59371C0.835747 6.33864 0.845237 5.45719 0.9093 4.48438L0.917605 4.36219L0.921164 4.3005L0.930654 4.17712L0.956754 3.86867L0.968617 3.74529C1.02556 3.12958 1.10979 2.53166 1.22961 2.08204C1.33721 1.67873 1.54893 1.31081 1.84356 1.01513C2.13819 0.719464 2.50537 0.506442 2.90829 0.397426C3.48604 0.243201 4.74001 0.148293 6.05685 0.0889758L6.25853 0.0806714L6.46258 0.0735536L6.56461 0.0699945L6.76747 0.0616901C7.89653 0.0253578 9.02604 0.00518773 10.1557 0.0011864H10.3846V0ZM8.42598 3.80817V9.52398L13.3576 6.66726L8.42598 3.80817Z"
                    fill="#1f1f1f"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
}