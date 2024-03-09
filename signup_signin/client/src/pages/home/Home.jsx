import React from "react";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import { makeRequest } from "../../axios";


const Home=()=>{
	const[expenses,setExpenses]=useState([]);

	useEffect(()=>{
		const fetch=async()=>{
				try{

					const res= await makeRequest.get("http://localhost:3000/api/add")
					setExpenses(res.data)
					console.log(res.data);
				}
				catch(err){
					console.log(err)
				}}
		fetch()


	},[]);


  const checkHandler=async()=>{
	 const res=await makeRequest.post("http://localhost:3000/api/premium")
	 console.log(res.data);

	 var options={

		"key":res.data.key_id,
		"order_id":res.data.order.id,
		"handler":async function(res){
		await axios.post("http://localhost:3000/api/premium",{
			order_id:options.order_id,
			payment_id:res.razorpay_payment_id,
		
	},{headers: {"Authorization": token}  })
	 	alert("you are a premium user")
			}
  };

  const rzpl=new Razorpay(options);
  rzpl.open();
//   e.preventDefault();
  rzpl.on("payment.failed",function(res){
	console.log(res)
	alert('something went wrong')
  })

  }


  const handleDelete=(Id)=>{

	axios.delete(`http://localhost:3000/api/${Id}`)
	window.location.reload();

  }

 

	return (
		<div>
		<h1>This is a expense application</h1>
		<div className="expenses">
                {expenses.length > 0 ? (
                    expenses.map((item) => (
                        <div key={item.id} className="item">
                            <h2>{item.category}</h2>
                            <p>{item.description}</p>
                            <span>{item.expense}</span>
                            <button>
                                <Link to={`/update/${item.id}`}>UPDATE</Link>
                            </button>
                            <button onClick={() => handleDelete(item.id)}>DELETE</button>
                        </div>
                    ))
                ) : (
                    <p>No expenses available</p>
                )}
            </div>

		<button  ><Link to="/add">ADD NEW EXPENSE</Link></button>
		<button onClick={checkHandler}>MEMBERSHIP</button>
			


	</div>

	)
}

export default Home;