export default function App() {
  const tl = gsap.timeline()
  useEffect(() => {
    gsap.fromTo(".intro-animation",
      {
        opacity: 1,
        duration: 2,//!➡➡➡➡➡➡➡➡➡➡➡➡➡⬇
        ease: "power2.in" //? ----------------⬇
      },//? ----------------------------------⬇
      {//? -----------------------------------⬇
        delay: 1,//! ➡➡➡➡➡➡➡➡➡➡➡➡➡ ⬇
        display: "none",//? ------------------⬇
        opacity: 0,//? -----------------------⬇
      }//? -----------------------------------⬇
    )//? -------------------------------------⬇
    gsap.fromTo(".hero-animation",//? --------⬇
      {//? -----------------------------------⬇
        opacity: 0,//? -----------------------⬇
      },//? ----------------------------------⬇
      {//? -----------------------------------⬇
        delay: 2,//! ⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅
        opacity: 1,
      }
    )
    tl.to(".text-animation",
      {
        duration: 0.8,
        opacity: 5,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01
      }
    )
    gsap.set("#quote", { perspective: 400 });
  }, [])

  const SplitText = ({ children }) => {
    const words = children.split("")

    return (
      words.map((word, index) => (
        <span className=' opacity-1 text-animation' key={index}>{word}</span>
      )
      )
    )
  }
  
  const restart = () => {
    tl.restart()
  }
  return (
    <div className='bg-slate-100 h-screen'>
      {/* //! SCENE  1*/}
      <div id="quote" className=' hero-animation ------> mx-auto container text-center <------'>
        <SplitText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat illo corrupti! Nemo tenetur aliquid impedit voluptates ipsum libero distinctio assumenda rem laboriosam provident, aliquam voluptate, corrupti autem animi officiis.
        </SplitText>
      </div>
      <button onClick={() => restart()}>click</button>
    </div>
  )
}