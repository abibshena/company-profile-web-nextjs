"use client"

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const session = useSession()  
  const menus = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio'
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog'
    },
    {
        id: 4,
        title: 'About',
        url: '/about'
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact'
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard'
    }
  ]
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Lutfi Dev</Link>
        <div className={styles.menus}>
            <DarkModeToggle />
            {menus.map(menu => (
                <Link href={menu.url} key={menu.id} className={styles.menu}>{menu.title}</Link>
            ))}
            {
                session.status === "authenticated" && (
                    <button 
                        className={styles.logout}
                        onClick={signOut}>
                        Logout
                    </button>
                )
            }
        </div>
    </div>
  )
}

export default Navbar