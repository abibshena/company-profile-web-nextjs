import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p className={styles.desc}>
          Nullam eget semper justo, sit amet lacinia arcu. Phasellus tristique metus vel justo vehicula, 
          sed euismod mi consequat. Praesent lacinia, tortor at facilisis fermentum, urna nisi bibendum elit,
          sit amet tempus nunc eros a lectus. In bibendum purus id diam dignissim
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nullam eget semper justo, sit amet lacinia arcu. 
        Phasellus tristique metus vel justo vehicula, 
        sed euismod mi consequat. Praesent lacinia, tortor at facilisis fermentum, 
        urna nisi bibendum elit, sit amet tempus nunc eros a lectus. 
        In bibendum purus id diam dignissim, eu facilisis justo pellentesque. 
        Vivamus non ex at nunc tincidunt cursus. Vivamus bibendum dolor in libero ultrices, ut tincidunt metus viverra. 
        Cras ac mauris eu orci consectetur bibendum. Integer id ligula eu ex rhoncus vestibulum. Sed varius, dui eu luctus bibendum, 
        lectus felis tempor urna, in feugiat nulla sapien ac erat. Nunc id efficitur ante, sed vestibulum arcu. Sed luctus eget lorem in suscipit. 
        Vivamus euismod nunc a feugiat dictum. Integer vehicula ipsum nec leo vehicula, ac tempor augue condimentum.
        </p>
      </div>
    </div>
  )
}

export default BlogPost