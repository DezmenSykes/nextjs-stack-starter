import Image from 'next/image'
import styles from './single-post.module.css'

const SinglePostPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/contact.png" alt="" fill/>
        </div>
        <div className={styles.postContainer}>
          <h1>Title</h1>
        </div>
      </div>
    )
  }
  
  export default SinglePostPage