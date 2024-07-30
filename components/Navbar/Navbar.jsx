import Links from '@/components/Navbar/Links/Links'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar;