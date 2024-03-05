import React from 'react'

const Hero = () => {
	const expenses=[
		{	id:1,
			category:"medicine",
			description:"it is very important",
			expense:123

},
{
	id:2,category:"educational",
	description:"it is very important",
	expense:200
}]
  return (
	<div>
		<h1>This is a expense application</h1>
		<div className="expenses">

				{expenses.map(item=>(
					<div key={item.id} className="item">
						<h2>{item.category}</h2>
						<p>{item.description}</p>
						<span>{item.expense}</span>


					</div>
				)
				)}

		</div>


	</div>
  )
}

export default Hero