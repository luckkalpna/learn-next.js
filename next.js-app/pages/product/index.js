import Link from "next/link"

function ProductList() {
    return(
      <>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>
    <h2>
      <ul>
        <li>
        <Link href='/product/1'>Product 1</Link> 
        </li>
      </ul>
      </h2>
    <h2>
    <ul>
        <li>
        <Link href='/product/2'>Product 2</Link> 
        </li>
      </ul>
    </h2>
    <h2>
    <ul>
        <li>
        <Link href='/product/3'>Product 3</Link> 
        </li>
      </ul>
    </h2>
    <h2>
    <ul>
        <li>
        <Link href='/product/4'>Product 4</Link> 
        </li>
      </ul>
    </h2>
    <h2>
    <ul>
        <li>
        <Link href='/product/5'>Product 5</Link> 
        </li>
      </ul>
    </h2>
    </>
    )
}

export default ProductList