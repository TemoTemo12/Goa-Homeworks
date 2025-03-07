import { useEffect, useState } from "react"
import axios from "axios"
export default function App() {
  const [users, setUsers] = useState({})
  const getUser = async () => {
    const getUser = await axios.get("http://localhost:5001/api/users")
    setUsers(getUser)
  }
  

  console.log(users.data)
  return (
    <div className='bg-black'>
      <button onClick={() => getUser()} className="size-50 bg-red-400">click</button>
    </div>
  )
}
