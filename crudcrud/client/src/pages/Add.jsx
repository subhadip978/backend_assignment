import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Add = () => {

const [book,setBook]=useState({
    title:"",
    description:"",
    price:null,
    cover:"",
})

const navigate=useNavigate();


const handlechange=(e)=>{
 setBook((prev)=>({...prev, [e.target.name]:e.target.value}) );
}


const handleClick=async (e)=>{
  e.preventDefault();
  try{
    const res=await axios.post("http://localhost:3000/books",book)
    console.log(res.data)
    navigate("/");
  }

  catch(err){
    console.log(err);
  }

}


  return (

	<div className="form">
<h1>ADD NEW BOOK</h1>
<input type="text" placeholder='title'   onChange={handlechange}  name="title" id="" />
<input type="text" placeholder='description'    onChange={handlechange} name="description" id="" />
<input type="number" placeholder='price'   onChange={handlechange}  name="price" id="" />
<input type="text" placeholder='cover'   onChange={handlechange}  name="cover" id="" />


    <button onClick={handleClick}>ADD</button>
  </div>


  )
}

export default Add