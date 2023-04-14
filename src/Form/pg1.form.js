import React,{ useContext } from 'react'
import FormContext from '../formcontext/FormContext'

const Pg1 = () => {                            
    const {
        username,
        setUsername,
        cusername,
        setCUsername
     } = useContext(FormContext);                           //child element using Context 

  return (
    <div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Requisition Title</label>
            <input type="email" value={username} onChange={(e)=>{
                setUsername(e.target.value);
            }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           </div>
           <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Gender</label>
            <input type="email" value={cusername} onChange={(e)=>{
                setCUsername(e.target.value)
            }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           </div>
        </form>
    </div>
  )
}

export default Pg1