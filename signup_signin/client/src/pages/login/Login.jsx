import React from 'react'
import "./login.scss"




const Login = () => {
  return (
	<div className='login'>
		<div className="card">

			<div className="left">
				<h1>HELLO WORLD</h1>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, magni?</p>
				<span>DON;T HAVE ACCOUNT</span>
				<button>REGISTER</button>

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