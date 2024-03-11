import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Leaderboard = () => {
	const [leaderboardData, setLeaderboardData] = useState([]);
	useEffect(()=>{

		axios.get("http:localhost:30000/api/leaderboard",{
			withCredentials:true
		})
		setLeaderboardData(response.data);

	})
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