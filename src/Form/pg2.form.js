import React,{ useContext } from 'react'
import FormContext from '../formcontext/FormContext'

const Pg2 = () => {
    const {
        phone,
        setPhone,
        rphone,
        setRPhone
     } = useContext(FormContext);                                //child element using Context 
  return (
    <div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Job Title</label>
            <input type="email" value={phone} onChange={(e)=>{
                setPhone(e.target.value);
             }}
              class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           </div>
           <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Job Details</label>
            <input type="email" value={rphone} onChange={(e)=>{
                setRPhone(e.target.value);
             }}
              class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           </div>
        </form>
    </div>
  )
}

export default Pg2