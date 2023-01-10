import { useRef,useState,useEffect } from 'react';
import 'animate.css';
import {products} from "../../data.js"
import ProductCard from '../widgets/productcard';


const Invoices=()=>{
    
    const myRef = useRef(null);
    
    useEffect(() => {
        // ✅ You can read or write refs in effects
     
      },[]);

      

      return (
        <div  className="products page flex flex-col  w-full h-full" >

          <div ref={myRef} className="overflow-scroll hide-scroll">
            {
              products.map(product=>{
                return  <ProductCard name={product.name} description={product.description} 
                category={product.category} threshold={product.threshhold} stock={product.stock}></ProductCard>
              })
            }
           
          </div>
       
        </div> 
      
                  
      );

}

export default Invoices;