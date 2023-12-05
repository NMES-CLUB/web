import Image from 'next/image';
import Link from 'next/link';
import styles from './Components.module.scss'

export default function navbar() {
    return(
        <>
            <section className={styles.colors}>
                <div className={styles.color1}></div>
                <div className={styles.color2}></div>
                <div className={styles.color3}></div>
            </section>
        </>
    )
}