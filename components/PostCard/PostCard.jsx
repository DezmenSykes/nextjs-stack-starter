import Image from 'next/image'
import styles from './post-card.module.css'
import Link from 'next/link'
const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/108153/pexels-photo-108153.jpeg" alt="" className={styles.thumbnail} fill/>
                </div>
                <span className={styles.date}>08.07.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, nisi? Deserunt voluptatum dignissimos magni. Quo, ratione quia, doloribus enim, quibusdam explicabo itaque nihil nam veniam rerum soluta ipsa repellendus consequatur?</p>
                <Link href="/blog/post" className={styles.readMoreBtn}>Read More</Link>
            </div>
        </div>
    )
  }
  
  export default PostCard