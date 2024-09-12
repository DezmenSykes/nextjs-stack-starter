import { Suspense } from 'react'
import styles from './admin.module.css'
import AdminPosts from '@/components/adminPosts/adminPosts'
import AdminPostForm from '@/components/adminPostForm/adminPostForm'
import AdminUsers from '@/components/adminUsers/adminUsers'
import AdminUserForm from '@/components/adminUserForm/adminUserForm'

const AdminPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h1>Posts</h1>
            <Suspense fallback={<div>Loading...</div>}>
              <AdminPosts />
            </Suspense>
          </div>
          <div className={styles.column}>
            <h1>Add Post</h1>
            <AdminPostForm />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>}>
              <h1>Users</h1>
              <AdminUsers />
          </Suspense>
          </div>
          <div className={styles.column}>
            <h1>Add User</h1>
            <AdminUserForm />
          </div>
        </div>
      </div>
    )
  }
  
  export default AdminPage