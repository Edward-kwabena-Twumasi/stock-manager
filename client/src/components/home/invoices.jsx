import { useState,useEffect } from 'react';
import Modal from '../widgets/modal';
// import {invoices} from "../../data.js"

const AddDocument=({showModal})=> {
        let dataModel={
          "customer":"",
          "amount":0       
        }
        if (showModal===true) {
          let title = <h1>Add Invoice</h1>
          let name= <input className='textfield' type="text" placeholder="customer name" name='customer'></input>
          let amount= <input className='textfield' type="number" placeholder="amount" name='amount'></input>
          return <Modal formElements={[title,name,amount]} dataModel={dataModel} path="invoices">
           
          </Modal>
        } 
       
       }

const Invoices=()=>{
    
    const [invoices, setInvoices] = useState([]);
    const [showModal,toggleShowModal]=useState(false)
    const [query, setQuery] = useState("");

    const handleAdd=()=>{
      toggleShowModal(!showModal)
    }

    useEffect(() => {
      async function getInvoices() {
        const response = await fetch(`http://localhost:5000/api/home/invoices`);
        
        if (!response.ok) {
          const message = `An error occured: ${response.statusText}`;
          console.log(message)
          return <h1>Cant fetch data. Check network connection</h1>;
        }
  
        const fetchedInvoices = await response.json();

         setInvoices(fetchedInvoices.filter(invoice=>invoice.customer.toLowerCase().includes(query)));
      }
  
      getInvoices();
  
      return;       
      
      },[query]);

      

      return (
        <div  className="invoices m-10 rounded-xl p-5 shadow-xl w-full h-full" >
           <AddDocument showModal={showModal}></AddDocument>
           <div className="p-3 flex w-full justify-between">
            <h1 className='font-bold text-xl'>Invoices</h1>
            <h1 className="mr-10 font-bold p-2 bg-green-700 text-white rounded-md" onClick={handleAdd}>Add</h1>
          </div>
          <table className='w-full'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
              
            </thead>
            <tbody>
              {
             invoices.length>0? invoices.map(invoice=>{
                return <tr>
                  <td>12345</td>
                  <td>Edward</td>
                  <td>10th Jan,2023</td>
                  <td>200</td>
                  </tr>                
              }): <h1>Add invoices to view them</h1>
            }
            </tbody>
            
           
         
       </table>
        </div> 
      
                  
      );

}

export default Invoices;