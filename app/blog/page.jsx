
import PostCard from '../../components/PostCard/PostCard'
import styles from './blog.module.css'

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if(!res.ok) {
    throw error("Something went wrong..");
  }

  return res.json();
}

const BlogPage = async () => {
    const posts = await getData();
    //console.log(posts);
    return (
      <div className={styles.container}>
        {posts.map((p) => (
          <div className={styles.post}> 
            <PostCard post={p} />
          </div>
        ))}
      </div>
    )
  }
  
  export default BlogPage