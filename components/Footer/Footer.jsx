import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.text}>Sykes Creatives Ltd. 2024 &copy; All Rights Reserved.</div>
        </div>
    )
}

export default Footer