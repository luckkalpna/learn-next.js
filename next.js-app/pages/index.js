import Link from "next/link"
import Router, { useRouter } from "next/router"

function Home() {

  const router = useRouter()
  const handleClick = () =>{
  console.log('Placing your order')
  router.push('/product')
}

    return(
      <>
      <h1>Home Page</h1>
        <ul>
          <li>
          <Link href= '/blog'>Blog</Link>
          </li>

          <li>
          <Link href= '/product'>Product</Link>
          </li>

          <li>
          <Link href= '/docs'>Documents</Link>
          </li>
        </ul>

        <button onClick={handleClick}>Place Order</button>
    </>
    )
  }

export default Home
