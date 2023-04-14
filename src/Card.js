import React,{ useContext } from 'react'
import FormContext from './formcontext/FormContext'

const Card = () => {
    const {
        username,
        setUsername,
        cusername,
        setCUsername,
        phone,
        setPhone,
        rphone,
        setRPhone,
        password,
        setPassword,
        rpassword,
        setRPassword
     } = useContext(FormContext);  
  return (
    <div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <input type="email" value={username} onChange={(e)=>{
                setUsername(e.target.value);
            }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           </div>
           <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Repeat Username</label>
            <input type="email" value={cusername} onChange={(e)=>{
                setCUsername(e.target.value)
            }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           </div>

            {/* Part 2 of form  */}

           <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Phone</label>
            <input type="email" value={phone} onChange={(e)=>{
                setPhone(e.target.value);
             }}
              class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           </div>
           <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Repeat Phone</label>
            <input type="email" value={rphone} onChange={(e)=>{
                setRPhone(e.target.value);
             }}
              class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           </div>
            
            {/* Part 3 of form  */}

           <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Password</label>
            <input type="email" value={password} onChange={(e)=>{
                setPassword(e.target.value);
             }}
             class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           </div>
           <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Repeat Password</label>
            <input type="email" value={rpassword} onChange={(e)=>{
                setRPassword(e.target.value);
             }}
             class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           </div>
        </form>
    </div>
  )
}

export default Card