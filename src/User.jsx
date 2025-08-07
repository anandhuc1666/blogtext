import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
function User() {
  const [state, setState] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then(ress => setState(ress.data))
      .catch(err => { console.log('data loss 404', err) })

  },[])
  return (

    <div className='w-full h-dvh bg-violet-700  justify-center  items-center flex  '>
<div className='mt-[100px] w-[800px] h-[500px] overflow-y-scroll hide-scrollbar '>
  {
  state.map(e=>{
   return <div className='w-[700px] h-[100px] bg-amber-100 rotate-2 rounded-3xl p-[20px] my-[5px] inset-shadow-sm inset-shadow-indigo-500 '>
        <h1 className='font-semibold'>{e.name}</h1>
        <p className='text-[#3a3737]'>{e.area}</p>
      </div>
  })
}

</div>

    </div>
  )
}

export default User