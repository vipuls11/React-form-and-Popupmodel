import React,{useRef} from 'react';
import { X,Download } from 'lucide-react';
import './MainModel.css';

function MainModel(props){
    const modalRef = useRef();

    const closeModal = (e) =>{
        if(modalRef.current === e.target){
        props.onClose();
        }
    }
    return( 
        
           
        <div className="MainModel__Popup" ref={modalRef} onClick={closeModal}>
            <div className="MainModel__Content">
                 <button onClick={ props.onClose} className="MainModel__btn"><X size={30}/></button>
                 <div className="MainModel__Ebook__Content">
                    <h1>Download FREE EBOOK</h1>
                    <p>
                        Want to Learn How to Crack Web development Interviews Like a Pro!
                    </p>
                    <form>
                    <input className="MainModel__Input" placeholder='Enter Your Email' type='email' required/>
                    <button className="MainModel__Download"> <Download /> Download eBook</button>
                    </form>
                 </div>
            </div>
        </div>
       
    )
}

export default MainModel;