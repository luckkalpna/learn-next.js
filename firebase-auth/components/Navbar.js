import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='container'>
      <h2>NEXT AUTH</h2>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
