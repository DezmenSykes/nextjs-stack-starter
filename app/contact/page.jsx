import Image from 'next/image'
import styles from './contact.module.css'


export const metadata = {
  title: 'Contact',
  description: 'Contact page description.',
};

const ContactPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" width={500} height={500}/>
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <input type='text' placeholder='First & Last Name' />
            <input type='email' placeholder='Email' />
            <input type='number' placeholder='Phone' />
            <textarea name="" cols="30" rows="10" placeholder="Message">

            </textarea>
            <button className={styles.submitBtn}>Send</button>
          </form>
        </div>
      </div>
    )
  }
  
  export default ContactPage