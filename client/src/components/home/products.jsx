import { useRef,useState,useEffect } from 'react';
import 'animate.css';
// import {products} from "../../data.js"
import ProductCard from '../widgets/productcard';
import Modal from '../widgets/modal.jsx';

const AddDocument=({showModal})=> {
        
            if (showModal===true) {
              let dataModel={
                "product":"",
                "stock":"",
                "threshhold":"",
                "category":"",
                "description":"",
              }
              let title = <h1>Add Product</h1>
              let name= <input className='textfield' type="text" placeholder="product name" name='product' ></input>
              let stock= <input className='textfield' type="number" placeholder="product stock" name='stock'></input>
              let thresh= <input className='textfield' type="number" placeholder="threshhold" name='threshhold'></input>
              let category= <input className='textfield' type="text" placeholder="product category" name='category'></input>
             let description= <textarea rows={10} cols="5" className='textarea' type="text" placeholder="Describe product" name='description'/>
              return <Modal formElements={[title,name,stock,thresh,category,description]} dataModel={dataModel} path="products">
               
              </Modal>
            } 
      }

const Products=()=>{
    
    const myRef = useRef(null);
    
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [showModal,toggleShowModal]=useState(false)
    const [query, setQuery] = useState("");

    const handleAdd=()=>{
      toggleShowModal(!showModal)
    }

    useEffect(() => {
      async function getProducts() {
        const response = await fetch(`http://localhost:5000/api/home/products`);
        
        if (!response.ok) {
          const message = `An error occured: ${response.statusText}`;
          console.log(message);
          return <h1>Cant fetch data. Check network connection</h1>;
        }
  
        const fetchedProducts = await response.json();

         setProducts(fetchedProducts.filter(product=>product.product.toLowerCase().includes(query)));
      }
  
      getProducts();
  
      return;       
      
      },[query]);

    useEffect(() => {
     if(categories===[]) {
      async function getCategories() {
        const response = await fetch(`http://localhost:5000/api/home/categories`);
        
        if (!response.ok) {
          const message = `An error occured: ${response.statusText}`;
          window.alert(message);
          return <h1>Cant fetch data. Check network connection</h1>;
        }
  
        const fetchedCategories = await response.json();

         setCategories(fetchedCategories);
      }
  
      getCategories();
  
      return;  }     
      
      },[products,categories]);

      
      
      

      return (
        <div  className="products p-10 " >
          <AddDocument showModal={showModal}></AddDocument>
          <div className="p-3 flex w-full justify-between">
            <h1 className='font-bold text-xl'>Products</h1>
            <h1 className="mr-10 font-bold p-2 bg-green-700 text-white rounded-md" onClick={handleAdd}>Add</h1>
          </div>
          <div ref={myRef} className="overflow-scroll hide-scroll grid grid-cols-3  w-full h-full">
            {
             products.length>0? products.map(product=>{
                return  <ProductCard name={product.name} description={product.description} 
                category={product.category} threshold={product.threshhold} stock={product.stock}></ProductCard>
              }):  <h1>Add products to view them</h1>
            }
           
          </div>
       
        </div> 
      
                  
      );

}

export default Products;