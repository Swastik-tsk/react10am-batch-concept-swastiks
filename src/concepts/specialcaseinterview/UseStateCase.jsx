import React, { useState } from 'react'

const UseStateCase = () => {

    const [count,setCount]=useState(0)
    const [name,setName]=useState("")
    const[user,setUser]=useState({name:'sundari'})
    user.name="leela"
    const updateCount=()=>{
        // setCount((prevState)=>prevState+1)
        // setCount((prevState)=>prevState+1)
        // setCount((prevState)=>prevState+1)
        setUser({...user})
    }
    console.log(user)
    console.log("hii")

  return (
    <div>
        <h1>{count}</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='border' />
        <button className='border' onClick={updateCount}>update</button>
    </div>
  )
}

export default UseStateCase