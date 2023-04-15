import Link from 'next/link'

function Navbar(){
  return(
    <nav className='header'>
      <h1 className='logo'>
        <a href="#">NextAuth</a>
      </h1>
      <ul className={`main-nav`}> 
        <li className='li-home'>
          <Link href='/'>HOME</Link>
        </li>

        <li>
          <Link href='/dashboard'>DASHBOARD</Link>
        </li>

        <li>
          <Link href='/blog'>BLOG</Link>
        </li>

        <li>
          <Link href='#'>SIGN IN</Link>
        </li>

        <li>
          <Link href='#'>SIGN OUT</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar