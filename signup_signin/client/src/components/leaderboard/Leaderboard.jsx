import React from 'react'
import { useEffect,useState } from 'react'

import { makeRequest } from '../../axios'

const Leaderboard = () => {
	const [leaderboardData, setLeaderboardData] = useState([]);
	useEffect(()=>{

		const fetchboard=async()=>{

			const res= await makeRequest.get("http://localhost:3000/api/leaderboard")
			console.log(res.data)
			setLeaderboardData(res.data);
		}

		fetchboard();


	},[])
  return (
	<div>Leaderboard



		<div>
			{leaderboardData.map((item,index)=>(
				<div key={index}>
						<p>{item.name} :{item.total}</p>
				</div>
			)

			)}
		</div>
	</div>
  )
}

export default Leaderboard