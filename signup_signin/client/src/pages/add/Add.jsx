import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Add = () => {
	const navigate=useNavigate();
	const [expense,setExpense]=useState({
		category:"",
		description:"",
		expense:""
	});

	const handleChange=(e)=>{
		e.preventDefault();

		setExpense(()=>({[e.target.name]:e.target.value})) ;

	}

	const handleClick=async(e)=>{
		e.preventDefault();
		try{

			await axios.post("http://localhost:3000/",expense);
			navigate("/");
		}
		catch(err){
			console.log(err);
		}
	}
  return (
	<div className="add">
		<h1>ADD NEW EXPENSE</h1>
		<input type="text" onChange={handleChange} placeholder="category" name="category"  id="" />
		<input type="text" onChange={handleChange} placeholder="description" name="description" id="" />
		<input type="text" onChange={handleChange} placeholder="expense" name="expense" id="" />
		<button onClick={handleClick}>ADD</button>
	</div>
  )
}

export default Add