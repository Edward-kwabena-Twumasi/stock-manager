

import { useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';



const Register=()=>{
  
    
     
    return (
        <div  className="flex flex-col w-screen justify-center  h-full">
            <h1 className="title text-3xl text-white font-bold m-3">Back end skills</h1>
            <div className='form'>
              <input className='textfield' type="text" placeholder="enter name" ></input>
           <input className='textfield' type="email" placeholder="enter password" ></input>
           <input className='textfield' type="password" placeholder="enter password" ></input>
           <button className="formbutton"  ><Link to='/api/home'>Register</Link></button> 

            </div>
           
            
           


        </div>
    )
}

export default Register 