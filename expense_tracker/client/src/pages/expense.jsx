import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Expense = () => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    description: ""
  });

  const [expenses, setExpenses] = useState([]);

  // Define fetchall function
  const fetchall = async () => {
    try {
      const res = await axios.get("http://localhost:3000/expenses");
      setExpenses(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Call fetchall function
    fetchall();
  }, []);

  const handleChange = (e) => {
    setExpense((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/expenses", expense);
      console.log(res.data);

      // Fetch all expenses again after adding a new expense
      fetchall();

      // Clear input fields
      setExpense({ title: "", category: "", description: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>EXPENSE APP</h1>
      <div className="form">
        <input type="text" placeholder="title" onChange={handleChange} name="title" id="" />
        <input type="text" placeholder="category" onChange={handleChange} name="category" id="" />
        <input type="text" placeholder="description" onChange={handleChange} name="description" id="" />
        <button onClick={handleClick} type="submit">ADD</button>
      </div>
      <div>
        {expenses.map(item =>
          <li key={item.id}>
            {item.title} - {item.category} - {item.description}
          </li>
        )}
      </div>
    </div>
  );
}



export default Expense