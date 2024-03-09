import { createContext } from "react";
import { useState ,useEffect} from "react";

import axios from "axios";

export const AuthContext=createContext();


export const AuthContextProvider=({children})=>{
	const [currentUser,setcurrentUser]=useState(JSON.parse(localStorage.getItem("user")) ||null );

	const login=async(input)=>{		
		const res=await axios.post("http://localhost:3000/api/signin",input,{
			withCredentials:true,
		}
			
		);
		console.log(res.data);
		setcurrentUser(res.data)
	}

	useEffect(()=>{
		localStorage.setItem("user",JSON.stringify(currentUser))
	},[currentUser]) 
	
	
	return(
	<AuthContext.Provider value={{currentUser,login}}>	
	{children}	
	</AuthContext.Provider>
)
}