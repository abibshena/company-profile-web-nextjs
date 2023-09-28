import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Have a good idea to write about?</h1>
        <p className={styles.desc}>
          Write whatever ideas you have here, so that other people can see them.
        </p>
        <button className={styles.button}>Write Now</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="main image" className={styles.img} />
      </div>
    </div>
  )
}
