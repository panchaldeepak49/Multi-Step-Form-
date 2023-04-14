import React,{ useContext } from 'react'
import FormContext from './formcontext/FormContext'
import './card1.css'

const Card1 = () => {
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
    <>
    <div className='main'>
        <div className='header'>
        <h5>Draft</h5>
        <p className='preview'>Preview</p>
        </div>
    <h5 className='regist'>New registration</h5>
    <div className='part_1'>
    <label>Requisition Title</label>
    <input type="text" className='input' value={username} onChange={(e)=>{
                setUsername(e.target.value);}}></input> 
      <label className='repeat_U'>Gender</label>
    <input type="text" className='input' value={cusername} onChange={(e)=>{
                setCUsername(e.target.value)}}></input>
    </div>

    <div className='part_2'>
    <label>My Job Title </label>
    <input type="text" className='input' value={phone} onChange={(e)=>{
                setPhone(e.target.value);
             }}></input> 
    <label className='job'>Job Details</label>
    <input type="text" className='input' value={rphone} onChange={(e)=>{
                setRPhone(e.target.value);
             }}></input>
    </div>

    <div className='part_3'>
    <label>Interview Mode </label>
    <input type="text" className='input' value={password} onChange={(e)=>{
                setPassword(e.target.value);
             }}></input> 
    <label className='i_d'>Interview Duration</label>
    <input type="text" className='input' value={rpassword} onChange={(e)=>{
                setRPassword(e.target.value);
             }}></input>
    </div>

    
    </div>
    </>
  )
}

export default Card1