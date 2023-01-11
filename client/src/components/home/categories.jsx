import { useRef,useState,useEffect } from 'react';
import 'animate.css';
import {categories} from "../../data.js"
import CategoryCard from '../widgets/categorycard';
import { BiHide } from 'react-icons/bi';
import Modal from '../widgets/modal.jsx';



const Categories=()=>{
    
    const formRef = useRef(null);
    const [categories, setCategories] = useState([]);
    const [showModal,toggleShowModal]=useState(false)
    const [form,setForm]=useState({
      "name":"",
      "description":""
    })

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
      
      },[query]);

      
      function ModalDisplay() {
        
            if (showModal===true) {
              let title = <h1 key={"title"}>Add category</h1>
              let name= <input key={"name"} className='textfield' type="text" placeholder="category name" name='category'></input>
             let description= <textarea key={"desc"} rows={10} cols="5" className='textarea' type="text" placeholder="Describe category" name='description'/>
              return <Modal Children={[title,name,description]} ref={formRef} onFormSubmit={onFormSubmit} onFormChange={onFormChange}>
               
              </Modal>
            } 
            console.log(showModal)
      }

      const onFormSubmit= async(e)=>{
         e.preventDefault();
        console.log(formRef.current.querySelectorAll("input")[0].value)

        const response=  await fetch(`http://localhost:5000/api/home/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

        const data=await response.json();
        console.log(data)
      }

      const onFormChange= async(e)=>{
        e.preventDefault();
        console.log(e.target.value)
        
      }

      return (
        <div  className="Categories p-10 flex flex-col  w-full h-full" >
         <ModalDisplay></ModalDisplay>
          
          <div className="p-3 flex w-full justify-between">
            <h1 className='font-bold text-xl'>Categories</h1>
            <h1 className="mr-10 font-bold p-2 bg-green-700 text-white rounded-md" onClick={handleAdd}>Add</h1>
          </div>
          
          <div  className= "overflow-hidden hide-scroll grid grid-cols-3 gap-6 w-full">
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