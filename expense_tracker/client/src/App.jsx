import {BrowserRouter, Routes,Route} from 'react-router-dom';
import React from 'react'
import Expense from "./pages/expense" ;
import Add from "./pages/Add";
function App() {
  

  return (
    <>
     <div className="app">

        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Expense/>}/>
         


            
          </Routes>
        </BrowserRouter>

     </div>
    </>
  )
}

export default App
