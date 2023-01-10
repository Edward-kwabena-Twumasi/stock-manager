
import {
    Link
  } from 'react-router-dom';
  import {BsList} from "react-icons/bs"
import { useState } from 'react';
import { BiHide } from 'react-icons/bi';

const NavBar=({onNavChange,index})=>{

  const [open,setOpen]=useState(false)
 const handleClick=()=>{
   setOpen(!open)
  }
  
    return (
        <div className="nav w-full flex gap-20  lg:p-4 p-2  bg-green-700  mb-0 fixed text-white z-50">
              <div className='flex justify-start w-1/2'>
                <h1 className='font-bold self-center'>Stock Manager</h1>
              </div>
              <div className='lg:flex justify-end gap-7 hidden'>
                
                <button className={` ease-switch`}  ><Link to='/api/auth'>Logout</Link></button> 
              </div> 
              {
                open?<div className='mobile-nav lg:hidden justify-end gap-7 flex flex-col absolute mt-16 p-7 w-[96%] rounded-md bg-slate-700 '>
                
                <button className={` ease-switch`}  onClick={()=>{ setOpen()} }><Link to='contact'>Logout</Link></button> 
              </div>:"" }

              <div className='lg:hidden flex justify-end w-1/2 pr-4 text-3xl' onClick={handleClick}>
               {!open? <BsList className='  self-center'/>:
                <BiHide className='  self-center'/>}

              </div>
       </div>

    );
}
export default NavBar;