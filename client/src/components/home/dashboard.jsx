import { useEffect, useState } from "react";

const Dashboard=()=>{

    const [dasboardData, setDasboardData] = useState({"categories":[],"products":[],"invoices":[]});
    
   
    useEffect(() => {
      async function getDasboardData() {
        const response = await fetch(`http://localhost:5000/api/home/DasboardData`);
  
        if (!response.ok) {
          const message = `An error occured: ${response.statusText}`;
         console.log(message);
          return <h1>Cant fetch data. Check network connection</h1>;
        }
  
        const fetchedDasboardData = await response.json();

         setDasboardData(fetchedDasboardData);
      }
  
      getDasboardData();
  
      return;       
      
      },[]);
    return (
        <div className="dash grid grid-cols-3 gap-3 p-10 justify-center  w-full h-full">
            <div className="h-[200px] card bg-white flex flex-col justify-between  text-black shadow-lg p-3 font-bold rounded-lg ">
                <h1>Summary</h1>
                <div className="flex justify-around">
                 <h5>{
                    dasboardData.categories.length
                    }
                </h5>
                <h5>{
                    dasboardData.products.length
                    }
                </h5>
                <h5>{
                    dasboardData.invoices.length
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