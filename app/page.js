// 'use client'
import Image from 'next/image'
import Link from 'next/link';
import styles from './page.module.scss'
import SplineModel from '../components/SplineModel';
import Cards from '../components/Cards';

export const metadata = {
  title: 'Unleash Your Creativity',
}

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
// export async function getServerSideProps () {
//     const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLRUZo5J_nESt_AMQudyHgV6lPQAQ6PSk8&key=${process.env.YOUTUBE_API_KEY}`)
//     const data = await res.json();
//     return {
//         props: {
//             data
//         }
//     }
// }

async function getData() {
  const maxResults = 6;
  // const channelId = 'UCYvir8vFn9m5OWvHdWlC_NA';
  const playlistId='PLRUZo5J_nESt_AMQudyHgV6lPQAQ6PSk8'
  // const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLRUZo5J_nESt_AMQudyHgV6lPQAQ6PSk8&key=${process.env.YOUTUBE_API_KEY}`)
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${process.env.YOUTUBE_API_KEY}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export default async function Page() {
  const data = await getData()
  // console.log(data)

  return (
    <main className={styles.main}>
        <div className={`${styles.container_top} ${styles.container}`}>
          <section className={styles.section1}>
            <div className={styles.grd1}>
              <div className={styles.radiant}></div>
                <Link href={'/videos'}>
                  <SplineModel data-type="video" />
                </Link>
            </div>
            <div className={styles.grd2}>
              <div className={styles.moto}>
                <h1 className={styles.h1}>Unleash</h1>
                <h3 className={styles.h3}>your creativity</h3>
                <p className={styles.p}>Бидний нэг болж мөрөөдлөө бүтээ</p>
              </div>
              <div className={styles.join}>
                <Link className={styles.join_button} href={'/join'}>
                  Элсэх
                </Link>
              </div>
            </div>
          </section>
          <section className={styles.section2}>
            <h2 className={styles.title}>Онцлох</h2>
            <div className={styles.cards}>
            {/* {data.items.map(item => {
              const { id, snippet = {} } = item;
              const { title, description, publishedAt, thumbnails = {}, resourceId = {} } = snippet;
              const { medium = {} } = thumbnails;
              return (
                <Card
                  key={id}
                  videoId={resourceId.videoId}
                  width={medium.width}
                  height={medium.height}
                  url={medium.url}
                  title={title}
                  description={description}
                />
            )})} */}
              <Cards data={data}/>
            </div>
          </section>
        </div>
      {/* <section className={styles.section2}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.icon}>
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0637 0.498749H10.175C11.2025 0.502499 16.4087 0.539999 17.8125 0.917499C18.2369 1.03271 18.6236 1.25728 18.9339 1.56876C19.2443 1.88024 19.4675 2.26773 19.5812 2.6925C19.7075 3.1675 19.7963 3.79625 19.8563 4.445L19.8688 4.575L19.8962 4.9L19.9063 5.03C19.9875 6.1725 19.9975 7.2425 19.9987 7.47625V7.57C19.9975 7.8125 19.9862 8.955 19.8962 10.145L19.8863 10.2762L19.875 10.4062C19.8125 11.1212 19.72 11.8312 19.5812 12.3537C19.4679 12.7787 19.2448 13.1664 18.9344 13.4779C18.6239 13.7894 18.237 14.0139 17.8125 14.1287C16.3625 14.5187 10.8512 14.5462 10.0875 14.5475H9.91C9.52375 14.5475 7.92625 14.54 6.25125 14.4825L6.03875 14.475L5.93 14.47L5.71625 14.4612L5.5025 14.4525C4.115 14.3912 2.79375 14.2925 2.185 14.1275C1.76061 14.0127 1.37383 13.7885 1.06341 13.4772C0.752979 13.1659 0.529809 12.7785 0.41625 12.3537C0.2775 11.8325 0.185 11.1212 0.1225 10.4062L0.1125 10.275L0.1025 10.145C0.0408095 9.298 0.00662483 8.44922 0 7.6L0 7.44625C0.0025 7.1775 0.0125 6.24875 0.08 5.22375L0.08875 5.095L0.0925 5.03L0.1025 4.9L0.13 4.575L0.1425 4.445C0.2025 3.79625 0.29125 3.16625 0.4175 2.6925C0.530867 2.26756 0.753953 1.87989 1.06439 1.56835C1.37483 1.25682 1.76171 1.03236 2.18625 0.917499C2.795 0.754999 4.11625 0.654999 5.50375 0.592499L5.71625 0.583749L5.93125 0.576249L6.03875 0.572499L6.2525 0.563749C7.44213 0.525467 8.63226 0.504215 9.8225 0.499999H10.0637V0.498749ZM8 4.51125V10.5337L13.1963 7.52375L8 4.51125Z" fill="#00FFBB"/>
                </svg>
              </div>
              <h3 className={styles.title}>Videos</h3>
            </div>
            <div className={styles.right}>
              <Link href={'./videos'} className={styles.link}>
                <h4 className={styles.title}>More</h4>
                <svg className={styles.icon} width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.70624 6.20547C8.09687 6.64492 8.09687 7.35859 7.70624 7.79804L2.70624 13.423C2.31562 13.8625 1.68124 13.8625 1.29062 13.423C0.899994 12.9836 0.899994 12.2699 1.29062 11.8305L5.58437 7L1.29374 2.16953C0.903119 1.73007 0.903119 1.0164 1.29374 0.57695C1.68437 0.137497 2.31874 0.137497 2.70937 0.57695L7.70937 6.20195L7.70624 6.20547Z" fill="#00FFBB"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className={styles.wrap}>
            {data.items.map(item => {
              const { id, snippet = {} } = item;
              const { title, description, publishedAt, thumbnails = {}, resourceId = {} } = snippet;
              const { medium = {} } = thumbnails;
              return (
                <Link target="_blank" href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                  <div className={styles.video} key={id}>
                      <Image className={styles.thumbnail} width={medium.width} height={medium.height} src={medium.url} alt="" /> 
                      <div className={styles.txt}>
                        <h3 className={styles.title}>{ title }</h3>
                        <p className={styles.description}>{ description }</p>
                      </div>
                  </div>
                </Link>
            )})}
          </div>
        </div>
      </section>
      <section className={styles.section3}>
      <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.icon}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.65034 11.8726C3.19676 9.13745 3.47048 7.77191 4.37305 6.89071C4.53986 6.72836 4.72028 6.58061 4.91235 6.4491C5.9533 5.73682 7.34733 5.73682 10.1354 5.73682H11.8683C14.6553 5.73682 16.0484 5.73682 17.0883 6.4491C17.2816 6.58138 17.4617 6.72994 17.6276 6.89173C18.5312 7.77191 18.8049 9.13847 19.3513 11.8716C20.1358 15.7953 20.5286 17.7571 19.625 19.1471C19.4622 19.3994 19.2709 19.6324 19.0552 19.842C17.8688 21 15.8693 21 11.8683 21H10.1354C6.1334 21 4.13291 21 2.94645 19.842C2.73178 19.6321 2.54101 19.399 2.37764 19.1471C1.47406 17.7571 1.86683 15.7953 2.65238 11.8716L2.65034 11.8726Z" stroke="#00FFBB" stroke-width="2"/>
                  <path d="M14.0529 9.807C14.6149 9.807 15.0705 9.35143 15.0705 8.78946C15.0705 8.22748 14.6149 7.77191 14.0529 7.77191C13.491 7.77191 13.0354 8.22748 13.0354 8.78946C13.0354 9.35143 13.491 9.807 14.0529 9.807Z" fill="#00FFBB"/>
                  <path d="M7.94766 9.807C8.50964 9.807 8.96521 9.35143 8.96521 8.78946C8.96521 8.22748 8.50964 7.77191 7.94766 7.77191C7.38569 7.77191 6.93011 8.22748 6.93011 8.78946C6.93011 9.35143 7.38569 9.807 7.94766 9.807Z" fill="#00FFBB"/>
                  <path d="M7.94772 5.73681V4.71926C7.94772 3.90965 8.26934 3.1332 8.84182 2.56072C9.4143 1.98824 10.1908 1.66663 11.0004 1.66663C11.81 1.66663 12.5864 1.98824 13.1589 2.56072C13.7314 3.1332 14.053 3.90965 14.053 4.71926V5.73681" stroke="#00FFBB" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <h3 className={styles.title}>Shop</h3>
            </div>
            <div className={styles.right}>
              <Link href={'./shop'} className={styles.link}>
                <h4 className={styles.title}>More</h4>
                <svg className={styles.icon} width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.70624 6.20547C8.09687 6.64492 8.09687 7.35859 7.70624 7.79804L2.70624 13.423C2.31562 13.8625 1.68124 13.8625 1.29062 13.423C0.899994 12.9836 0.899994 12.2699 1.29062 11.8305L5.58437 7L1.29374 2.16953C0.903119 1.73007 0.903119 1.0164 1.29374 0.57695C1.68437 0.137497 2.31874 0.137497 2.70937 0.57695L7.70937 6.20195L7.70624 6.20547Z" fill="#00FFBB"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  )
}

