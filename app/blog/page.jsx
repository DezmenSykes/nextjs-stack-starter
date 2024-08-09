import { error } from 'console';
import PostCard from '../../components/PostCard/PostCard'
import styles from './blog.module.css'

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if(!res.ok)
    throw error("Something went wrong..")

  return res.json()
}

const BlogPage = async () => {
    const posts = await getData();

    return (
      <div className={styles.container}>
        {posts.map((post) => {
          <div className={styles.post} key={post.id}> 
            <PostCard post={post} />
          </div>
        })}
  
      </div>
    )
  }
  
  export default BlogPage