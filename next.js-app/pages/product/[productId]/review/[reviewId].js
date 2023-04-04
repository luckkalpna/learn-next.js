import {useRouter} from 'next/router'

function review() {
  const router = useRouter()
  const { productId, reviewId } = router.query
  return (
    <h2>Review {reviewId} for Product  {productId}</h2>
  )
}

export default review
