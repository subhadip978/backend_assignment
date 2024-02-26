import React from 'react'
import axios from 'axios';
import { useState ,useEffect} from 'react';

const Product = () => {

	const [item,setItem]=useState({
		name:'',
		description:'',
		price:'',
		quantity:'',


	})
	const[items,setItems]=useState([]);

	const fetchAll=async()=>{

		try{	
		const res=await axios.get("http://localhost:4000/api/v1/product");
		setItems(res.data);
		console.log(res.data);
		}
		catch(err){
			console.log(err)
		}


	}

	useEffect(()=>{
		fetchAll();
	},[])


	const handleChange=(e)=>{

		setItem((prev)=>({...prev,[e.target.name]:e.target.value}))
	}


	const handleClick=async(e)=>{
		e.preventDefault();
		const res=await axios.post("http://localhost:4000/api/v1/product",item);
		console.log(res.data);
		fetchAll();
		setItem({name:'',description:'',price:'',quantity:''})

	}


		const handleDelete=async(id)=>{
			try{
				await axios.delete(`http://localhost:4000/api/v1/product/${id}`)
				window.location.reload();
			}
			catch(err){
				console.log(err);
			}

		}

  return (
	<div>
			<div className="form">


	<input type="text" placeholder='name'            onChange={handleChange} name="name" id="" />
	<input type="text" placeholder='description'     onChange={handleChange} name="description" id="" />
	<input type="number" placeholder='price'         onChange={handleChange}   name="price" id="" />
	<input type="number" placeholder='quantity'      onChange={handleChange}    name="quantity" id="" />
	<button onClick={handleClick}>ADD ITEM</button>
			</div>

			<div className="itemlist">

			{items.map(i=>
				<li key={i.id} className="item">
						{i.name}    ---- {i.description}---{i.price} ----{i.quantity}

						<button className="delete" onClick={()=>handleDelete(i.id)}>DELETE</button>
				</li>
			)}

			</div>


	</div>
  )
}


export default Product