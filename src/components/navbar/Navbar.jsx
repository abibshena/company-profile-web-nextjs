import Link from 'next/link'
import React from 'react'

const Navbar = () => {
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
    <div>
        <Link href="/">Just Write</Link>
        <div>
            {menus.map(menu => (
                <Link href={menu.url} key={menu.id}>{menu.title}</Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar