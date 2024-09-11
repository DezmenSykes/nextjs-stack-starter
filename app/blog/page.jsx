import PostCard from '../../components/PostCard/PostCard'
import styles from './blog.module.css'
import { getPosts } from '@/libs/data'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next: {revalidate: 3600}});

  if(!res.ok) {
    throw new Error("Something went wrong..");
  }

  return res.json();
} 

export const metadata = {
    title: 'Blog',
    description: 'Blog page description.',
};
  

const BlogPage = async () => {
    const posts = await getData();
    console.log(posts);
    return (
      <div className={styles.container}>
        {posts.map((p) => (
          <div className={styles.post}> 
            <PostCard post={p} key={p.id} />
          </div>
        ))} 
      </div>
    )
  }
  
  export default BlogPage