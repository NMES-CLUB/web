// 'use client'
import Image from 'next/image'
import Link from 'next/link';
import styles from './page.module.scss'

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
        <div className={styles.container}>
          <section className={styles.section}>
              {data.items.map(item => {
                const { id, snippet = {} } = item;
                const { title, description, publishedAt, thumbnails = {}, resourceId = {} } = snippet;
                const { medium = {} } = thumbnails;
                return (
                  <Link target="_blank" href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                  <div className={styles.video}>
                    <Image className={styles.thumbnail} width={medium.width} height={medium.height} src={medium.url} alt="" /> 
                    <div className={styles.txt}>
                      <div className={styles.wrap}>
                        <h3 className={styles.title}>{ title }</h3>
                      </div>
                      <p className={styles.description}>{ description }</p>
                    </div>
                  </div>
                </Link>
              )})}
          </section>
        </div>
    </main>
  )
}