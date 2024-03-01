import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'



const Login = () => {
  return (
	<div className='login'>
		<div className="card">

			<div className="left">
				<h1>HELLO WORLD</h1>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, magni?</p>
				<span>DON;T HAVE ACCOUNT</span>
				<Link to="/signup">

				<button>REGISTER</button>
				</Link>


			</div>
			<div className="right">
				<h1>LOGIN</h1>
				<form action="">
					<input type="text"placeholder='username' name="" id="" />
					<input type="text"placeholder='password' name="" id="" />

					
					<button>LOG IN</button>
				</form>
			</div>


		</div>
	</div>
  )
}

export default Login