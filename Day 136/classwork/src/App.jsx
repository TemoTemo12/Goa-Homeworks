import React, { useEffect } from 'react'
import gsap from 'gsap'

const App = () => {
  useEffect(() => {
    gsap.fromTo(
      '#div1',
      2,
      { x: 400,
        rotation: 360,
        

       },
      { x: 0,y:100 ,ease: 'elastic.out(1, 0.3)',
        rotation: 0,
        duration: 3000
       }
    )
  }, [])

  return (
    <div>
      <div id='div1' className='w-30 h-30 bg-black m-10'>
        <p className='text-white'>hello world</p>
      </div>
    </div>
  )
}

export default App