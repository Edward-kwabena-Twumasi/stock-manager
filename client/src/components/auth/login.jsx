
import { useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';




const Frontend=()=>{
    const myRef = useRef(null);
    
useEffect(() => {
   

  },[]);

    return (
        <div ref={myRef} className="flex flex-col w-screen justify-center  h-full">
            <h1 className="title text-3xl text-white font-bold m-3">Login</h1>
          <div className='form '>
           
           <input className='textfield' type="text" placeholder="enter email" ></input>
           <input className='textfield' type="password" placeholder="enter password" ></input>
           <button className="formbutton"  ><Link to='/api/home'>Login</Link></button> 

          </div>
           
        </div>
    )
}

export default Frontend 