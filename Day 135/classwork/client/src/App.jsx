import React, { useEffect , useState} from 'react'

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => { 
    fetch('http://localhost:3000/api/user')
      .then(res => res.json())
      .then(data => setData(data))
   }, [])
  return (
<div>
  <div>
  <h1>Hello</h1>
  <style>{`
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background: #2e2f33;
    }
    div {
      font-family: 'Helvetica Neue', sans-serif;
      color: #444;
      padding: 30px;
      background: linear-gradient(135deg, #f06, #f79);
      border-radius: 20px;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    div:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }
    h1 {
      color: #fff;
      font-size: 2.5em;
      margin: 0;
    }
  `}</style>
</div>
</div>
  )
}
