"use client"
import Spline from '@splinetool/react-spline';
import styles from "./Components.module.scss"

export default function SplineModel(){
    return (
        <Spline className={styles.spline} scene="https://prod.spline.design/ImiHoSBtUAJhtJdB/scene.splinecode" />
    )
    // await sleep(2000);
}

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }