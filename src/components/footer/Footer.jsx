import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>Abib Doang</div>
        <div className={styles.social}>
          <Image src="/1.png" className={styles.icon} width={15} height={15} alt="Social Media" />
          <Image src="/2.png" className={styles.icon} width={15} height={15} alt="Social Media " />
          <Image src="/3.png" className={styles.icon} width={15} height={15} alt="Social Media" />
          <Image src="/4.png" className={styles.icon} width={15} height={15} alt="Social Media" />
        </div>
    </div>
  )
}

export default Footer
