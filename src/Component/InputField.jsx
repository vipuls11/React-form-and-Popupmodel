import React ,{useState} from  'react';
import './InputField.css'

function InputField() {
    const [fullName, setfullName] = useState({
        fname:"",
        lname:"",
    })

    const inputEvent = event =>{
            console.log(event.target.value);
            console.log(event.target.name);

            const value = event.target.value;
            const name= event.target.name;

            setfullName((preValue)=>{
                console.log(preValue);
                if(name === "fName"){
                    return{
                        fname: value,
                        lname: preValue.lname,                    }
                }
                else if(name === "lName"){
                    return{
                        fname:preValue.fname,
                        lname:value,
                    }
                }
            });
    };

    const onSubmit=event=>{
        event.preventDefault();
        alert("Form submitted");
    };

return(<>
<div className='Form-Input'>
    <h1 className='Form-Input__h1'>{`Hello ${fullName.fname} ${fullName.lname}`}</h1>
    <form className="" onSubmit={onSubmit}>
        <input className='' 
        type='text'  
        placeholder='Enter your Name' 
        name='fName'
         value={fullName.fname} 
        onChange={inputEvent}
        autoComplete='off'
        /> <br /> <br />
        <input className=''
         type='text'  
         placeholder='Enter your LastName' 
         name='lName' 
         value={fullName.lname} 
         onChange={inputEvent}
         autoComplete='off'
         /> <br /> <br />
        <button className='' type='button'>ON SUBMIT</button>
    </form>
    
</div>
</>)
}

export default InputField;