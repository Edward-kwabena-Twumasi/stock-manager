import { useEffect, useState } from "react";

const Dashboard=()=>{

    const [products, setProducts] = useState([]);   
    const [categories, setCategories] = useState([]);   
    const [invoices, setInvoices] = useState([]);   

    useEffect(() => {
        async function getProducts() {
          const response = await fetch(`http://localhost:5000/api/home/products`);
          
          if (!response.ok) {
            const message = `An error occured: ${response.statusText}`;
            console.log(message);
            return <h1>Cant fetch data. Check network connection</h1>;
          }
    
          const fetchedProducts = await response.json();
    
           setProducts(fetchedProducts)
          
        }
    
        getProducts();
    
        return;       
        
        },[]);
  
      useEffect(() => {
      
        async function getCategories() {
          const response = await fetch(`http://localhost:5000/api/home/categories`);
          
          if (!response.ok) {
            const message = `An error occured: ${response.statusText}`;
          
            return <h1>Cant fetch data. Check network connection</h1>;
          }
    
          const fetchedCategories = await response.json();
  
         
          setCategories(fetchedCategories)
        }
    
        getCategories();
    
        return;     
        
        },[]);
        useEffect(() => {
      
            async function getInvoices() {
              const response = await fetch(`http://localhost:5000/api/home/invoices`);
              
              if (!response.ok) {
                const message = `An error occured: ${response.statusText}`;
              
                return <h1>Cant fetch data. Check network connection</h1>;
              }
        
              const fetchedInvoices = await response.json();
             
              setInvoices(fetchedInvoices)
            
            }
        
            getInvoices();
        
            return;     
            
            },[]);

    return (
        <div className="dash grid grid-cols-3 gap-3 p-10 justify-center  w-full h-full">
            <div className="h-[200px] card bg-white flex flex-col justify-between  text-black shadow-lg p-3 font-bold rounded-lg ">
                <h1>Summary</h1>
                <div className="flex justify-around">
                 <h5>{
                   categories.length
                    }
                </h5>
                <h5>{
                   products.length
                    }
                </h5>
                <h5>{
                    invoices.length
                    }
                </h5>
                </div>
            </div>
            <div className="h-[200px] card bg-white flex flex-col text-black shadow-lg p-3 font-bold rounded-lg ">
                <h1>Top 5</h1>

            </div>
            <div className="h-[200px] card bg-white flex flex-col text-black shadow-lg p-3 font-bold rounded-lg ">
                <h1>Flow</h1>

            </div>
            <div className="h-[200px] card bg-white flex flex-col text-black shadow-lg p-3 font-bold rounded-lg ">
                <h1>Running out</h1>

            </div>
            <div className="h-[200px] card bg-white flex flex-col text-black shadow-lg p-3 font-bold rounded-lg ">
                <h1>Total sales</h1>

            </div>
            <div className="h-[200px] card bg-white flex flex-col text-black shadow-lg p-3 font-bold rounded-lg ">
                <h1>Total revenue</h1>

            </div>
        </div>
    )
}

export default Dashboard