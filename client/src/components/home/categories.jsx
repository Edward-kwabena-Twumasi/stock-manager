import {useState,useEffect} from 'react';
import 'animate.css';
import CategoryCard from '../widgets/categorycard';
import Modal from '../widgets/modal.jsx';


 const AddDocument=({showModal})=> {
        
            if (showModal===true) {
              let dataModel={
                "category":"",
                "description":"",
              }
              let title = <h1 key={"title"}>Add category</h1>
              let name= <input key={"name"} className='textfield' type="text" name='category' placeholder="category name"></input>
              let description= <textarea key={"desc"} rows={10} cols="5" className='textarea' type="text"  name='description' placeholder="Describe category"/>
              return <Modal formElements={[title,name,description]} dataModel={dataModel} path="categories">
               
              </Modal>
            } 
      }

const Categories=()=>{
    
    
    const [showModal,toggleShowModal]=useState(false)
    const [query, setQuery] = useState("");
    const [categories, setCategories] = useState([]);
    
    const handleAdd=()=>{
      toggleShowModal(!showModal)
    }

    useEffect(() => {
      async function getCategories() {
        const response = await fetch(`http://localhost:5000/api/home/categories`);
  
        if (!response.ok) {
          const message = `An error occured: ${response.statusText}`;
         console.log(message);
          return <h1>Cant fetch data. Check network connection</h1>;
        }
  
        const fetchedCategories = await response.json();
         if (fetchedCategories!==[]) {      
         setCategories(fetchedCategories.filter(category=>category.category.toLowerCase().includes(query)));
        }
      }
  
      getCategories();
  
      return;       
      
      },[query]);

      
      
      return (
        <div  className="Categories p-10 flex flex-col  w-full h-full" >
          <AddDocument showModal={showModal}></AddDocument>         
          <div className="p-3 flex w-full justify-between">
            <h1 className='font-bold text-xl'>Categories</h1>
            <h1 className="mr-10 font-bold p-2 bg-green-700 text-white rounded-md" onClick={handleAdd}>Add</h1>
          </div>
          
          <div  className= "overflow-hidden hide-scroll justify-center content-center grid grid-cols-3 gap-6 w-full">
          {
             categories.length>0? categories.map(category=>{
                return  <CategoryCard name={category.category} description={category.description} ></CategoryCard>
              }):  <h1>Add categories to view them</h1>
            }
          </div>
       
        </div> 
      
                  
      );

}

export default Categories;