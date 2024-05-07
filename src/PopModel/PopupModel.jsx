import React, {useState} from 'react';
 import './PopupModel.css';
import MainModel from './MainModel';

 const PopupModel = () =>{
    const [showModel, setShowModel]= useState(false)
    return(
        <>
        <div className="PopModel__Main">
            <h1 className="">Popup Model</h1>
            <button className='PopModel__Btn' onClick={()=>setShowModel(true)}>Get the eBook</button>
            
              {showModel &&   <MainModel onClose={()=>setShowModel(false)}/>}
            </div>
        </>
    )
 }

 export default PopupModel;
