import styles from './post-user.module.css'

const getData = async (userId) => {
    console.log(userId)
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  
    if(!res.ok) {
      throw error("Something went wrong..");
    }
  
    return res.json();
  }

const PostUser = async ({userId}) => {
    const user = await getData(userId);
    //console.log(user);
    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.name}</span>
        </div>
    )
}
  
export default PostUser