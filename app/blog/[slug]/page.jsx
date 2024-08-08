import Image from 'next/image'
import styles from './single-post.module.css'

const SinglePostPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="https://images.pexels.com/photos/108153/pexels-photo-108153.jpeg" alt="" fill/>
        </div>
        <div className={styles.postContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.details}>
              <Image 
                className={styles.avatar} 
                src="https://images.pexels.com/photos/108153/pexels-photo-108153.jpeg"
                alt="" width={50} height={50} />
              <div className={styles.detailText}>
                <span className={styles.detailTitle}>Author</span>
                <span className={styles.detailValue}>Mister Anderson</span>
              </div>
              <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>08.08.2024</span>
              </div>
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident neque fuga incidunt sint voluptate tempora omnis similique error! Eum autem accusamus velit doloremque soluta vitae repudiandae optio corporis delectus dolorum!
          </div>
        </div>
      </div>
    )
  }
  
  export default SinglePostPage