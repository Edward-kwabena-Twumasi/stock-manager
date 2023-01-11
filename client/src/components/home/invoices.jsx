import { useRef,useState,useEffect } from 'react';
import Modal from '../widgets/modal';
// import {invoices} from "../../data.js"


const Invoices=()=>{
    
    const myRef = useRef(null);
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
          window.alert(message);
          return <h1>Cant fetch data. Check network connection</h1>;
        }
  
        const fetchedInvoices = await response.json();

         setInvoices(fetchedInvoices.filter(category=>category.name.toLowerCase().includes(query)));
      }
  
      getInvoices();
  
      return;       
      
      },[query]);

      function ModalDisplay() {
        
        if (showModal===true) {
          let title = <h1>Add Product</h1>
          let name= <input className='textfield' type="text" placeholder="customer name" name='customer'></input>
          let amount= <input className='textfield' type="text" placeholder="amount" ></input>
         let description= <textarea rows={10} cols="5" className='textarea' type="text" placeholder="Describe product" />
          return <Modal Children={[title,name,amount]}>
           
          </Modal>
        } 
        console.log(showModal)
  }


      return (
        <div  className="invoices m-10 rounded-xl p-5 shadow-xl w-full h-full" >
          <ModalDisplay></ModalDisplay>
           <div className="p-3 flex w-full justify-between">
            <h1 className='font-bold text-xl'>Invoices</h1>
            <h1 className="mr-10 font-bold p-2 bg-green-700 text-white rounded-md" onClick={handleAdd}>Add</h1>
          </div>
          <table className='w-full'>
            <tr>
              <th>Id</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
            {
              invoices.map(product=>{
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