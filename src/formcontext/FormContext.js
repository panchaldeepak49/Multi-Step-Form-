import React,{useState, createContext} from 'react'

const FormContext = createContext();                       // parent element creating Context 

export const FormProvider =({children}) =>{
    const [username , setUsername] = useState('');
    const [cusername , setCUsername] = useState('');

    const [phone , setPhone] = useState('');
    const [rphone , setRPhone] = useState('');
    const [password , setPassword] = useState('');
    const [rpassword , setRPassword] = useState('');

return (
    <FormContext.Provider                                      //Provider element using Context 
      value = {{
        username,
        cusername,
        phone,
        rphone,
        password,
        rpassword,
        setUsername,
        setCUsername,
        setPhone,
        setRPhone,
        setPassword,
        setRPassword

      }}
    >
    {children}
    </FormContext.Provider>
)
}

export default FormContext;