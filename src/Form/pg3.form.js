import React,{useContext} from 'react'
import FormContext from '../formcontext/FormContext'

const Pg3 = () => {
    const {
        password,
        setPassword,
        rpassword,
        setRPassword
     } = useContext(FormContext);                     //child element using Context 
  return (
    <div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Interview Mode</label>
            <input type="email" value={password} onChange={(e)=>{
                setPassword(e.target.value);
             }}
             class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           </div>
           <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Interview Duration</label>
            <input type="email" value={rpassword} onChange={(e)=>{
                setRPassword(e.target.value);
             }}
             class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           </div>
        </form>
    </div>
  )
}

export default Pg3