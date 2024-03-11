import React from "react";
import { Link } from "react-router-dom";
import { useState ,useEffect,useContext} from "react";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import Leaderboard from "../../components/leaderboard/Leaderboard";

const Home=()=>{

	const {handlePremium}=useContext(AuthContext);
	const {premiumUser}=useContext(AuthContext)
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
		await handlePremium();


  }


  const handleDelete=async(Id)=>{

	await makeRequest.delete(`http://localhost:3000/api/add/${Id}`)
	// window.location.reload();
	setExpenses(expenses.filter(item=>item.id !==Id))

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
			

								{premiumUser!==null && (
									<div className="leaderboard">
										<Leaderboard/>
									</div>
								) }

	</div>

	)
}

export default Home;