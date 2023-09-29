import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>About Us</h1>
          <h2 className={styles.imgDesc}>We provide a place to write your ideas.</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
            <h1 className={styles.title}>Who Are We?</h1>
            <p className={styles.desc}>
              We are a website that offers you the freedom to express yourself through the written word. 
              Whether you have a story to tell, ideas to share, 
              or thoughts to convey, our platform welcomes your voice. 
              <br />
              <br />
              We believe in the power of words to inspire, connect, and create change, 
              and we provide a space where you can unleash your creativity and share your unique perspective with the world. 
              Join us in this journey of self-expression, where your words have the potential to make a lasting impact.
            </p>
        </div>
        <div className={styles.item}>
            <h1 className={styles.title}>What We Do?</h1>
            <p className={styles.desc}>
              At Just Write, our mission is to amplify your voice and stories. 
              We take your ideas and stories and share them through our platform, 
              ensuring they reach a wide audience. 
              <br />
              <br />
              By doing so, we aim to connect you with a diverse community of like-minded individuals, 
              enthusiasts, and readers who are eager to hear what you have to say. Your words have the power to inspire, inform, and engage, 
              and we're here to help you make that impact. Together, we'll bring your ideas and stories to life, reaching an ever-expanding 
              audience eager to explore and appreciate your unique perspective.
            </p>
            <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About