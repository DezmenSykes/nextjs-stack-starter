import Image from 'next/image'
import styles from './single-post.module.css'
import PostUser from '@/components/PostUser/PostUser'
import { Suspense } from 'react';
import { getPost } from '@/libs/data';

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {next: {revalidate: 3600}});

  if(!res.ok) {
    throw new Error("Something went wrong..");
  }

  return res.json();
}

export const generateMetadata = async({params}) => {
  const {slug} = params;
  const post = await getData(slug);
  return {
    title: post.title,
    description: post.desc
  }
}

const SinglePostPage = async ({params}) => {

    const {slug} = params;
    const post = await getPost(slug);
    //console.log(post)

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