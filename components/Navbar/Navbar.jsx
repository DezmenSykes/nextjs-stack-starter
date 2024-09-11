import Links from '@/components/Navbar/Links/Links'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { auth } from '@/libs/auth'

const Navbar = async () => {

    const session = await auth();
    console.log(session)
    
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                Logo
            </Link>
            <div className={styles.nav_links}>
                <Links session={session} />
            </div>
        </div>
    )
}

export default Navbar;