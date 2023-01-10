import React, { useEffect, useRef, useState} from "react";

import { Link } from "react-router-dom";


const Introduction =(props)=>{
    const getIntro=useRef(null)

    
    useEffect(()=>{
       const introParent=getIntro.current;
       const intros= introParent.querySelectorAll('h3')
        
     
       intros.forEach((intro,i) => {
        if (intro) {
           let prev=intro
            setTimeout(() => {
                intro.classList.toggle("show-text")
            }, (i)*1800);
            prev.classList.remove("show-text")
            
        }
       });
       
    //    }, 3600);
       
    },[])

   


    

   
    
    return(
        <div className="intro-screen">
             <div className="sm-text">
                 <h3 className=" "> Manage your <span className="text-success">stock</span></h3>
             </div>
            <div className="intro" ref={getIntro}>
                <h3 className="intro-text "> Manage your <span className="text-success">stock</span></h3>,
                <h3 className="intro-text ">Know how <span className="text-success" >business is going</span></h3> ,
                <h3 className="intro-text ">Make informed <span className="text-success">decisions</span></h3>
                <h3 className="intro-text font-weight-normal text-success"> Get Started </h3> 
            </div>
            <button className="formbutton"  ><Link to='/api/home'>Begin!</Link></button> 
    </div>
    )
}

export default Introduction;