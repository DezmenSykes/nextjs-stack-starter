import Links from '@/components/Navbar/Links/Links'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                Logo
            </Link>
            <div className={styles.nav_links}>
                <Links />
            </div>
        </div>
    )
}

export default Navbar;