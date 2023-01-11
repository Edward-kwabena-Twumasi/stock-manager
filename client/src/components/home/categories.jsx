import { useRef,useState,useEffect } from 'react';
import 'animate.css';
import {categories} from "../../data.js"
import CategoryCard from '../widgets/categorycard';
import { BiHide } from 'react-icons/bi';
import Modal from '../widgets/modal.jsx';



const Categories=()=>{
    
    const myRef = useRef(null);
    const [categories, setCategories] = useState([]);
    const [showModal,toggleShowModal]=useState(false)
    const [query, setQuery] = useState("");

    const handleAdd=()=>{
      toggleShowModal(!showModal)
    }

    useEffect(() => {
      async function getCategories() {
        const response = await fetch(`http://localhost:5000/api/home/categories`);
  
        if (!response.ok) {
          const message = `An error occured: ${response.statusText}`;
          window.alert(message);
          return <h1>Cant fetch data. Check network connection</h1>;
        }
  
        const fetchedCategories = await response.json();

         setCategories(fetchedCategories.filter(category=>category.name.toLowerCase().includes(query)));
      }
  
      getCategories();
  
      return;       
      
      },[]);

      
      function ModalDisplay() {
        
            if (showModal===true) {
              let title = <h1>Add category</h1>
              let name= <input className='textfield' type="text" placeholder="category name" ></input>
             let description= <textarea rows={10} cols="5" className='textarea' type="text" placeholder="Describe category" />
              return <Modal Children={[title,name,description]}>
               
              </Modal>
            } 
            console.log(showModal)
      }

      return (
        <div  className="Categories p-10 flex flex-col  w-full h-full" >
         <ModalDisplay></ModalDisplay>
          
          <div className="p-3 flex w-full justify-between">
            <h1 className='font-bold text-xl'>Categories</h1>
            <h1 className="mr-10 font-bold p-2 bg-green-700 text-white rounded-md" onClick={handleAdd}>Add</h1>
          </div>
          
          <div ref={myRef} className= "overflow-hidden hide-scroll grid grid-cols-3 gap-6 w-full">
          {
             categories.length>0? categories.map(category=>{
                return  <CategoryCard name={category.name} description={category.description} ></CategoryCard>
              }):  <h1>Add categories to view them</h1>
            }
          </div>
       
        </div> 
      
                  
      );

}

export default Categories;