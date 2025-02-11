import { useState, useEffect } from 'react'
import './App.css'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Prod1 from './components/Prod1'
import Options from './components/Options'

function App() {
  const [count, setCount] = useState(0)
  const [name1, setTitle1] = useState([])
  const [id1, setId1] = useState([])
  const [body1, setBody1] = useState([])
  const [name2, setTitle2] = useState([])
  const [id2, setId2] = useState([])
  const [body2, setBody2] = useState([])

  function countAdd(){
    setCount(count+1)
  }

  const fetchdata =  async() => {
      let rec = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      let bodydata = await rec.json()
      
      let id1 =bodydata[0].id
      let name1 = bodydata[0].name
      let body1 = bodydata[0].body
      setTitle1(name1)
      setId1(id1)
      setBody1(body1)

      let id2 =bodydata[1].id
      let name2 = bodydata[1].name
      let body2 = bodydata[1].body
      setTitle2(name2)
      setId2(id2)
      setBody2(body2)
  }

  useEffect(()=> {
    fetchdata()
  },[]);

  return (
      <div className='bg-black w-screen h-screen '>
        <div className='bg-orange-700 w-screen h-[30px] fixed top-[0px] left-[0px]'>
              <h1 className='text-white text-2xl font-bold font-mono'>FAST OUT</h1>
        </div>
        <Menu></Menu>
        <Cart count={count}></Cart>
        {/* <Options></Options> */}
        <Prod1 id1={id1} name1={name1} body1={body1} id2={id2} name2={name2} body2={body2} add={countAdd}></Prod1>
      </div>
  )
}

export default App
