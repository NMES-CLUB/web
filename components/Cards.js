<<<<<<< HEAD
"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from "./Components.module.scss"
import Link from 'next/link';
import Image from 'next/image';

export default function Cards({ data }){
  // console.log(data)
    return (
      <Swiper
      spaceBetween={16}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      >
      {data.items.map(item => {
          const { id, snippet = {} } = item;
          const { title, description, publishedAt, thumbnails = {}, resourceId = {} } = snippet;
          const { medium = {} } = thumbnails;
          return (
        <SwiperSlide key={id}>
          <Link target="_blank" href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
            <div className={styles.video}>
                <Image className={styles.thumbnail} width={medium.width} height={medium.height} src={medium.url} alt="" /> 
                <div className={styles.txt}>
                  <div className={styles.wrap}>
                    <h3 className={styles.title}>{ title }</h3>
                    <div className={styles.icon}>
                      <div className={styles.top}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M10.804 8L5 4.633V11.367L10.804 8ZM11.596 7.304C11.7186 7.37419 11.8205 7.47552 11.8913 7.59774C11.9622 7.71996 11.9995 7.85873 11.9995 8C11.9995 8.14127 11.9622 8.28004 11.8913 8.40226C11.8205 8.52447 11.7186 8.62581 11.596 8.696L5.233 12.388C4.713 12.69 4 12.345 4 11.692V4.308C4 3.655 4.713 3.31 5.233 3.612L11.596 7.304Z" fill="black"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className={styles.description}>{ description }</p>
                </div>
            </div>
          </Link>
        </SwiperSlide>
      )})}
      </Swiper>
    )
}

// "use client"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// export default function Card({ videoId, id, width, height, url, title, description }) {
// return (
// <Swiper
// spaceBetween={50}
// slidesPerView={3}
// onSlideChange={() => console.log('slide change')}
// onSwiper={(swiper) => console.log(swiper)}
// >
// <SwiperSlide>
// <Link target="_blank" href={`https://www.youtube.com/watch?v=${videoId}`}>
// <div className={styles.video} key={id}>
// <Image className={styles.thumbnail} width={width} height={height} src={url} alt="" />
// <div className={styles.txt}>
// <div className={styles.wrap}>
// <h3 className={styles.title}>{title}</h3>
// <div className={styles.button}>
// <div className={styles.top}>
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
// <path d="M10.804 8L5 4.633V11.367L10.804 8ZM11.596 7.304C11.7186 7.37419 11.8205 7.47552 11.8913 7.59774C11.9622 7.71996 11.9995 7.85873 11.9995 8C11.9995 8.14127 11.9622 8.28004 11.8913 8.40226C11.8205 8.52447 11.7186 8.62581 11.596 8.696L5.233 12.388C4.713 12.69 4 12.345 4 11.692V4.308C4 3.655 4.713 3.31 5.233 3.612L11.596 7.304Z" fill="black" />
// </svg>
// </div>
// </div>
// </div>
// <p className={styles.description}>{description}</p>
// </div>
// </div>
// </Link>
// </SwiperSlide>
// </Swiper>
// );
=======
"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from "./Components.module.scss"
import Link from 'next/link';
import Image from 'next/image';

export default function Cards({ data }){
  // console.log(data)
    return (
      <Swiper
      spaceBetween={16}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      >
      {data.items.map(item => {
          const { id, snippet = {} } = item;
          const { title, description, publishedAt, thumbnails = {}, resourceId = {} } = snippet;
          const { medium = {} } = thumbnails;
          return (
        <SwiperSlide key={id}>
          <Link target="_blank" href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
            <div className={styles.video}>
                <Image className={styles.thumbnail} width={medium.width} height={medium.height} src={medium.url} alt="" /> 
                <div className={styles.txt}>
                  <div className={styles.wrap}>
                    <h3 className={styles.title}>{ title }</h3>
                    <div className={styles.icon}>
                      <div className={styles.top}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M10.804 8L5 4.633V11.367L10.804 8ZM11.596 7.304C11.7186 7.37419 11.8205 7.47552 11.8913 7.59774C11.9622 7.71996 11.9995 7.85873 11.9995 8C11.9995 8.14127 11.9622 8.28004 11.8913 8.40226C11.8205 8.52447 11.7186 8.62581 11.596 8.696L5.233 12.388C4.713 12.69 4 12.345 4 11.692V4.308C4 3.655 4.713 3.31 5.233 3.612L11.596 7.304Z" fill="black"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className={styles.description}>{ description }</p>
                </div>
            </div>
          </Link>
        </SwiperSlide>
      )})}
      </Swiper>
    )
}

// "use client"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// export default function Card({ videoId, id, width, height, url, title, description }) {
// return (
// <Swiper
// spaceBetween={50}
// slidesPerView={3}
// onSlideChange={() => console.log('slide change')}
// onSwiper={(swiper) => console.log(swiper)}
// >
// <SwiperSlide>
// <Link target="_blank" href={`https://www.youtube.com/watch?v=${videoId}`}>
// <div className={styles.video} key={id}>
// <Image className={styles.thumbnail} width={width} height={height} src={url} alt="" />
// <div className={styles.txt}>
// <div className={styles.wrap}>
// <h3 className={styles.title}>{title}</h3>
// <div className={styles.button}>
// <div className={styles.top}>
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
// <path d="M10.804 8L5 4.633V11.367L10.804 8ZM11.596 7.304C11.7186 7.37419 11.8205 7.47552 11.8913 7.59774C11.9622 7.71996 11.9995 7.85873 11.9995 8C11.9995 8.14127 11.9622 8.28004 11.8913 8.40226C11.8205 8.52447 11.7186 8.62581 11.596 8.696L5.233 12.388C4.713 12.69 4 12.345 4 11.692V4.308C4 3.655 4.713 3.31 5.233 3.612L11.596 7.304Z" fill="black" />
// </svg>
// </div>
// </div>
// </div>
// <p className={styles.description}>{description}</p>
// </div>
// </div>
// </Link>
// </SwiperSlide>
// </Swiper>
// );
>>>>>>> d92f634af31e83bfcefe10bf8da239c9fff48772
// }