import Image from 'next/image'
import styles from './single-post.module.css'
import PostUser from '@/components/PostUser/PostUser'

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache: 'no-cache'});

  if(!res.ok) {
    throw error("Something went wrong..");
  }

  return res.json();
}

const SinglePostPage = async ({params}) => {

    const {slug} = params;
    const post = await getData(slug);

    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="https://images.pexels.com/photos/108153/pexels-photo-108153.jpeg" alt="" fill/>
        </div>
        <div className={styles.postContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.details}>
              <Image 
                className={styles.avatar} 
                src="https://images.pexels.com/photos/108153/pexels-photo-108153.jpeg"
                alt="" width={50} height={50} />
              <PostUser userId={post.userId}/>
              <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>08.08.2024</span>
              </div>
          </div>
          <div className={styles.content}>
            {post.body}
          </div>
        </div>
      </div>
    )
  }
  
  export default SinglePostPage