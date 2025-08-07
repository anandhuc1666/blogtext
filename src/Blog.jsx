import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Blog() {

const[text,setText]=useState({
  name:'',
  area:''
})
const bb=((e)=>{
  setText({...text,[e.target.name]:e.target.value})
})
const click=(e)=>{
e.preventDefault();
axios.post('http://localhost:5000/posts',text)
.then(ress=>{console.log("data send",ress.data)})
.catch(err=>{
  console.log('data 404',err)
})
}

  return (
    <div className='w-full h-dvh bg-violet-700  justify-center  items-center flex'>
      <div className='w-[600px] h-[500px] bg-amber-50 mt-[100px] flex flex-col py-5 px-5 rounded-3xl'>
     <input type="text" placeholder='Text your blog name:' className='bg-violet-700  w-full py-3 px-2 my-[20px] rounded-t-xl text-amber-50' name='name' value={text.name} onChange={bb}/>
     <textarea name="area" id="" className='bg-[#180C61] w-full h-[350px] rounded-b-2xl text-[#fff] text-2xl px-2.5 py-2.5' value={text.area} onChange={bb}></textarea>
     <Link to={'./User'}><button className=' bg-violet-700 w-20 h-12 align-end mt-3 ml-[480px] text-amber-50 rounded-3xl hover:bg-[#180C61]' onClick={click}>Send</button></Link>

      </div>
    </div>
  )
}

export default Blog