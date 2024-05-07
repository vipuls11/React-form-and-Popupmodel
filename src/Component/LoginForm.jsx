import React, {useState} from 'react';
import './LoginForm.css';

const LoginForm = () =>{
  const [fullName, setfullName] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:""
    })

    const inputEvent = event =>{
            console.log(event.target.value);
            console.log(event.target.name);

            // const value = event.target.value;
            // const name= event.target.name;
            const {value, name}=event.target
            setfullName((preValue)=>{
                console.log(preValue, "bdjv");

                    return{
                        ...preValue,
                        [name]:value
                    }
                // if(name === "fname"){
                //     return{
                //         fname: value,
                //         lname: preValue.lname, 
                //         email:preValue.email,
                //         phone:preValue.phone
                //     }
                // }
                // else if(name === "lname"){
                //     return{
                //         fname:preValue.fname,
                //         lname:value,
                //          email:preValue.email,
                //         phone:preValue.phone
                //     }
                // }
                // else if(name === "email"){
                //     return{
                //         fname:preValue.fname,
                //         lname:preValue.lname,
                //          email:value,
                //         phone:preValue.phone
                //     }
                // }
                // else if(name === "phone"){
                //     return{
                //         fname:preValue.fname,
                //         lname:preValue.lname,
                //          email:preValue.email,
                //         phone:value
                //     }
                // }
            });
    };

    const onSubmits=(event)=>{
        event.preventDefault();
        alert("Form submitted");
    };

return(<>
<div className='FormLogin-Input'>
    <h1 className='Form-InputLogin__h1'>{`Hello ${fullName.fname} ${fullName.lname}`}</h1>

    <p className='Form-InputLogin__p'>Email : {fullName.email}</p>
    <p className='Form-InputLogin__p'>Number : {fullName.phone}</p>
    <form className="" onSubmit={onSubmits}>
        <input className='Input-Item' 
        type='text'  
        placeholder='Enter your Name' 
        name='fname'
         value={fullName.fname} 
        onChange={inputEvent}
        autoComplete='off'
        /> 
        <input className='Input-Item'
         type='text'  
         placeholder='Enter your LastName' 
         name='lname' 
         value={fullName.lname} 
         onChange={inputEvent}
         autoComplete='off'
         /> 
         
           <input className='Input-Item'
         type='text'  
         placeholder='Enter your email' 
         name='email' 
         value={fullName.email} 
         onChange={inputEvent}
         autoComplete='off'
         /> 
           <input className='Input-Item'
         type='number'  
         placeholder='Enter your phone' 
         name='phone' 
         value={fullName.phone} 
         onChange={inputEvent}
         autoComplete='off'
         /> 
        <button className='button' type='button'>ON SUBMIT</button>
    </form>
    
</div>
</>)
}

export default LoginForm;