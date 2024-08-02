import Image from 'next/image'
import styles from './home.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Digital Creative Agency</h1>
        <p>This is a dumy creative agency meant to provide the best digital services in web development and creative marketing and branding.</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brands}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  )
}

export default HomePage