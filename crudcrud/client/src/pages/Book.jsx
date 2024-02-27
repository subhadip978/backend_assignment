import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Book = () => {
  const [books,setBook]=useState([]);

  useEffect(()=>{
    const fetchAllBooks=async()=>{
      try{
        const res=await axios.get("http://localhost:3000/books")
        setBook(res.data)
        console.log(res);
      }
      catch(err){
        console.log(err)
      }}
    fetchAllBooks()
  },[])


  const handleDelete=async (id)=>{

    try{
      await axios.delete(`http://localhost:3000/books/${id}`)
      window.location.reload();
    }
    catch(err){
      console.log(err);
    }
  }

  return (
	<div>

<h1>SUBHADIP BOOK SHOP</h1>

<div className="books">

{books.map(book=>
 
 <div className="book" key={book.id}>
    <img src={book.cover} alt=""  />
  <h2>{book.title}</h2>
  <p>{book.description}</p>
  <span>{book.price}</span>


  <button className="delete" onClick={()=>handleDelete(book.id)}>DELETE</button>

  <button className="update"> <Link to={`/update/${book.id}`}>UPDATE</Link></button>
  
      </div>
  
  
  )}
  </div>
  <button>
<Link to="/add">ADD NEW BOOK</Link>

  </button>

  </div>
  )
}

export default Book