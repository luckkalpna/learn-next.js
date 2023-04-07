import Link from 'next/link'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>
        NEXT JS pre-rendering
      </h1>
      <ul>
        <li>
        <Link href= '/users'>User</Link>
        </li>

        <li>
        <Link href= '/posts'>Post</Link>
        </li>
      </ul>
    </>
  )
}
