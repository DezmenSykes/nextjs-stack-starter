import Image from "next/image"
import styles from './about.module.css'

const AboutPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2>About Our Agency</h2>
          <h1>We deliver the best digital services anyone brand or business can ask for.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10K +</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>3K +</h1>
              <p>Clients served</p>
            </div>
            <div className={styles.box}>
              <h1>20K +</h1>
              <p>Fun facts and stuff</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/about.png" width={500} height={500} alt="" /> 
        </div>
      </div>
    )
  }
  
  export default AboutPage