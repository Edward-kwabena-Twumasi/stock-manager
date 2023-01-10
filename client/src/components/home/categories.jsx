import { useRef,useState,useEffect } from 'react';
import 'animate.css';
import {categories} from "../../data.js"
import CategoryCard from '../widgets/categorycard';




const Categories=()=>{
    
    const myRef = useRef(null);
    
    useEffect(() => {
        // ✅ You can read or write refs in effects
      
      
      },[]);

      

      return (
        <div  className="Categories p-10 flex flex-col  w-full h-full" >

          <div ref={myRef} className="overflow-scroll hide-scroll">
          {
              categories.map(category=>{
                return  <CategoryCard name={category.name} description={category.description} ></CategoryCard>
              })
            }
          </div>
       
        </div> 
      
                  
      );

}

export default Categories;