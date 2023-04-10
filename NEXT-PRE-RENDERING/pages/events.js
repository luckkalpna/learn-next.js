import { useState } from 'react'
import { useRouter } from 'next/router'

function EventList({ eventList }) {

  const [events, setEvents] = useState(eventList)
  const router = useRouter()

  const fetchSportsEvents = async () => {
    const response = await fetch(`/events?category=sports`)
    const data = await response.json()
    setEvents(data)
    router.push('/events?category=sports', undefined, { shallow: true })
  }

  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of events</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h3>{event.id} <br /> {event.title}  {event.description} | {event.category}</h3>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export async function getServerSideProps(context) {
  const { query } = context
  const { category } = query
  const queryString = category? 'category=sports' : ''
  const response = await fetch(`https://jsonplaceholder.typicode.com/events?${queryString}`)
  const data = await response.json()

  return {
    props: {
      eventList: data,
    },
  }
}

export default EventList
