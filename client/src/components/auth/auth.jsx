
import { useEffect,useRef,forwardRef,  useState } from 'react';
import { Link, Outlet} from 'react-router-dom';

const AuthScreen=forwardRef((props,ref)=>{

const [index,setIndex]=useState(0)
let styles=["border-b-4",""]
const handleClick=(newIndex)=>{
  setIndex(newIndex)
}

const myRef = useRef(null);
    
useEffect(() => {
   
  

  },[]);

 

    return (
       <div className="auth p-20 flex flex-col h-full " ref={ref}>
        
                <div className="flex gap-6 lg:mt-5 mt-20 justify-center">
                    <Link onClick={()=>handleClick(0)} to='login'><button className= {`text-green-600  p-2 px-6 border-green-600  ${styles[index]}` } onClick={()=>handleClick(0)}>Login </button></Link>
                    <Link onClick={()=>handleClick(1)} to='register'> <button className={`text-green-600  p-2 px-6 border-green-600 ${styles[1-index]}` } onClick={()=>handleClick(1)}>Register</button> </Link>

                </div>
                <div ref={myRef} className="overflow-scroll hide-scroll">
                  <Outlet/>
                </div>
               
                       
       </div>

    );
})
export default AuthScreen;