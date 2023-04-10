import { useState, useEffect } from 'react'

function Dashboard() {
  
  const [ isLoading, setIsLoading] = useState(true)
  const [ dashboardData, setdashboardData] = useState(null)

  useEffect(() => {
    async function fetchDashboardData(){
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setdashboardData(data)
      setIsLoading(false)
    }
    fetchDashboardData()
  }, [])

  if(isLoading){
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - 1</h2>
      <h2>Likes - 20</h2>
      <h2>Followers - 120</h2>
      <h2>Following - 200</h2>
    </div>
  )
}

export default Dashboard
