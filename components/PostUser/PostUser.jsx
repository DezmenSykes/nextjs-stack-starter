
import { getUser } from '@/libs/data';
import styles from './post-user.module.css'
import Image  from 'next/image'

/*const getData = async (userId) => {
    console.log(userId)
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  
    if(!res.ok) {
      throw new Error("Something went wrong..");
    }
  
    return res.json();
}*/

 const PostUser = async ({userId}) => {
    const user = await getUser (userId);
    //console.log(user);
    return (
        <div className={styles.container}>
              {user.img && <Image 
                className={styles.avatar} 
                src={user.img}
                alt="" width={50} height={50} />}
              <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user.username}</span>
              </div>
        </div>
    )
}
  
export default PostUser