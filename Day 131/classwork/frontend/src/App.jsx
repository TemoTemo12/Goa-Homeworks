import React from 'react'

const App = () => {
  useEffect(() => {
    fetch("https://500/api/user")
    .then(res => res.json())
    .then(data => console.log(data))
    .then(err => console.log(err))
  })
  return (
    <div>
 
    </div>
  )
}

export default App
