import { useEffect, useState } from "react"

export default function App() {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem("users"))
    setTimeout(() => {
      setIsLoading(false)
      setUser(userLocalStorage)
    }, 1000);
  }, [])
  function handleAddUser() {
    const user = { name: "temur", surname: "velijanashvili" }
    localStorage.setItem("users", JSON.stringify(user))
  }
  return (
    <>
      <div className='size-50 bg-red-400 overflow-y-scroll p-2 m-2 rounded-xl border-5 border-blue-400 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum laboriosam vitae error quia, minus, placeat optio accusantium ratione quisquam sequi quaerat mollitia corrupti nulla similique officiis modi quasi. Reiciendis!
        Voluptate dolorum culpa provident fugiat, incidunt molestiae autem dicta hic. Amet exercitationem doloremque reiciendis culpa, veniam eos cumque numquam vitae officiis corporis quidem est inventore nihil minus velit expedita atque.
      </div>
      <button
        onClick={() => handleAddUser()}
        className="bg-red-500 border-3 border-black px-10 py-5 cursor-pointer ">click to add</button>
      <div>
        <h1 className="font-bold text-2xl">
          {user.name}
        </h1>
        <h1 className="font-bold text-2xl">
          {user.surname}
        </h1>
      </div>
      {isLoading && (<div className="rounded-full  border-5 border-black size-10 border-t-red-500 animate-spin"/>)}
    </>
  )
}