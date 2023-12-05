import Image from 'next/image';
import Link from 'next/link';
import styles from "./Components.module.scss"

export default function navbar() {
    return(
        <footer className={styles.footer}>
            © NMES club 2023
        </footer>
    )
}