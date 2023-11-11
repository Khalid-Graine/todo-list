import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" flex justify-center py-5">
       <div className="md:w-6/12 w-full p-2  bg-red-100">
        <form action="">
          <input type="text" value={'write any things'} />
          <button type="submit">add</button>
        </form>
        <ul>
          <li>
            <div>buy a coffee</div>
            <div>
            <button>done</button>
            <button>delete</button>
            </div>
          </li>
        </ul>
       </div>
      </div>
    </>
  )
}

export default App
