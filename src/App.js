import React,{useState} from 'react';
import './App.css';
import Pg1 from './Form/pg1.form'
import Pg2 from './Form/pg2.form';
import Pg3 from './Form/pg3.form';
import Card1 from './Card1'


function App() {
  const [page,setPage] = useState(1);
  return (
    <div className="container mt-4">
      <center>
        <h2>Create Candidate Requisition</h2>
      </center>
      <p>page {page}/3</p>
      <div>
        {
          page == 1 ? <Pg1 /> : page == 2 ? <Pg2 /> : <Pg3 /> 
        }
      
      </div>
      <center>
        {                                  //ternary operator to show back button only when page>1
          page > 1 && (
            <button className='btn btn-primary' onClick={()=>{
              const nextpage = page - 1;
              setPage(nextpage) ;
            }}>Back</button>
          )
        }
        
        {                                 //ternary operator to show next button only when page<3
          page < 3 && (
            <button className='btn btn-primary mx-4' onClick={()=>{
              const nextpage = page + 1;
              setPage(nextpage) ;
            }}>Next</button>
          )
        }
      
      </center>
      < Card1 />
    </div>
  );
}

export default App;
