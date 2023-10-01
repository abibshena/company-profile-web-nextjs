"use client"
import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import { useSession} from 'next-auth/react'
import styles from './page.module.css'

const Dashboard = () => {
  const session = useSession()

  console.log({session})

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
 
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard