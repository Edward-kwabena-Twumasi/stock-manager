import 'animate.css';
import {  forwardRef } from 'react';
import { Link } from "react-router-dom";



const About=forwardRef((props,ref)=>{

    return(
              
        <div className="about h-full flex flex-col justify-center overflow-hidden items-start 
        " ref={ref}>          

                  
                    <p className="summary text-white text-md mt-4 w-2/3">
                        I love programming because it is what gives life to technological ideas.
                         I am a passionate, highly motivated and progressive individual 
                         with great social skills. I can rap too 😊🎤

                    </p>
                               
        </div>
        
    );
}
)
export default About;