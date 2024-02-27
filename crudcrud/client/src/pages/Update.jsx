import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';


const Update = () => {
const [book,setBook]=useState({
  title:"",
  description:"",
  price:"",
  cover:""

});


const navigate=useNavigate();
const location=useLocation();

const bookId=location.pathname.split("/")[2]

const handleChange=(e)=>{
  setBook((prev)=>({...prev,[e.target.name]:e.target.value}))
}



const handleClick=async(e)=>{
  e.preventDefault();
  try{

   await axios.put(`http://localhost:3000/books/${bookId}`,book);
    
    navigate("/");
  }
  catch(err){
    console.log(err);
  }

}

  return (
	<div>

    <h1>update </h1>

      <div className="form">
        <input type="text"   onChange={handleChange} placeholder="title" name="title" id="" />
        <input type="text"   onChange={handleChange} placeholder="description" name="description" id="" />
        <input type="number" onChange={handleChange} placeholder="price" name="price" id="" />
        <input type="text"   onChange={handleChange} placeholder="cover" name="cover" id="" />
        <button onClick={handleClick}>UPDATE</button>
      </div>








  </div>
  )
}

export default Update