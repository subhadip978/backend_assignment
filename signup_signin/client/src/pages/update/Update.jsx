import React from 'react'
import { useState } from 'react' ;
import { useLocation,useNavigate } from 'react-router-dom';
import { makeRequest } from "../../axios";

const Update = () => {
		const location=useLocation();
		const navigate=useNavigate();

	const expenseId=location.pathname.split("/")[2];
	const [expenses,setExpenses]=useState({
		category:"",
		description:"",
		expense:""
	})
	
	const handleChange=(e)=>{
		setExpenses((prev)=>({...prev,[e.target.name]:e.target.value }))
	
	}


	const handleClick=async(e)=>{
		e.preventDefault();
		const res= await makeRequest.put(`http://localhost:3000/api/add/${expenseId}`,expenses);
		console.log(res)
		console.log(expenses);
		navigate("/");
	}

  return (
	<div>
		<h1>UPDATE </h1>


					<input type="text" 		onChange={handleChange}	name="category" id="" />
					<input type="text" 		onChange={handleChange}	name="description" id="" />
					<input type="text" 		onChange={handleChange}	name="expense" id="" />
					<button onClick={handleClick}>UPDATE</button>

	</div>
  )
}

export default Update