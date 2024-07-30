import Links from '@/components/Navbar/Links/Links'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <h1>Logo</h1>
            </div>
            <div className={styles.nav_links}>
                <Links />
            </div>
        </div>
    )
}

export default Navbar;