import Image from 'next/image'
import styles from './single-post.module.css'
import PostUser from '@/components/PostUser/PostUser'
import { Suspense } from 'react';
import { getPost } from '@/libs/data';

// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache: 'no-cache'});

//   if(!res.ok) {
//     throw error("Something went wrong..");
//   }

//   return res.json();
// }

const SinglePostPage = async ({params}) => {

    const {slug} = params;
    const post = await getPost(slug);
    console.log(post)

    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={post.img} alt="" fill/>
        </div>
        <div className={styles.postContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.details}>
              {post && (
                <Suspense fallback={<div>Loading..</div>}>
                  <PostUser userId={post.userId}/>
                </Suspense>
              )}
              <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
              </div>
          </div>
          <div className={styles.content}>
            {post.desc}
          </div>
        </div>
      </div>
    )
  }
  
  export default SinglePostPage