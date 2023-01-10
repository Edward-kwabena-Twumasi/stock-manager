import { useRef,useState,useEffect } from 'react';
import 'animate.css';
import {products} from "../../data.js"
import ProductCard from '../widgets/productcard';


const Products=()=>{
    
    const myRef = useRef(null);
    
    useEffect(() => {
        // ✅ You can read or write refs in effects
     
      },[]);

      

      return (
        <div  className="products p-10 " >
          <div className="p-3 flex w-full justify-between">
            <h1 className='font-bold text-xl'>Products</h1>
            <h1 className="mr-10 font-bold p-2 bg-green-700 text-white rounded-md">Add</h1>
          </div>
          <div ref={myRef} className="overflow-scroll hide-scroll grid grid-cols-3  w-full h-full">
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

export default Products;