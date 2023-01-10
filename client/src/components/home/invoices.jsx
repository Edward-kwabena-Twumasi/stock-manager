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
        <div  className="invoices m-10 rounded-xl p-5 shadow-xl w-full h-full" >
           <div className="p-3 flex w-full justify-between">
            <h1 className='font-bold text-xl'>Invoices</h1>
            <h1 className="mr-10 font-bold p-2 bg-green-700 text-white rounded-md">Add</h1>
          </div>
          <table className='w-full'>
            <tr>
              <th>Id</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
            {
              products.map(product=>{
                return <tr>
                  <td>12345</td>
                  <td>Edward</td>
                  <td>10th Jan,2023</td>
                  <td>200</td>
                  
                </tr>

                
              })
            }
           
         
       </table>
        </div> 
      
                  
      );

}

export default Invoices;