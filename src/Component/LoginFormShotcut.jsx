import React,{useState} from 'react';
import styles from './LoginFormShotcut.module.css';

const LoginFormShotcut =()=>{
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
                
            });
    };

    const onSubmits=(event)=>{
        event.preventDefault();
        alert("Form submitted");
    };

return(<>
<div className='FormLogin-Input'>
    <h1 className={styles.Form_InputLogin__h1}>{`Hello ${fullName.fname} ${fullName.lname}`}</h1>

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

export default LoginFormShotcut