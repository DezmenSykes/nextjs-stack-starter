import PostCard from '../../components/PostCard/PostCard'
import styles from './blog.module.css'
import { getPosts } from '@/libs/data'

/*const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if(!res.ok) {
    throw error("Something went wrong..");
  }

  return res.json();
} */

const BlogPage = async () => {
    const posts = await getPosts();
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