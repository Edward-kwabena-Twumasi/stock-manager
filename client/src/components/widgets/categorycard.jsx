import { Link } from "react-router-dom";
import {FaEdit, FaInfo} from "react-icons/fa"
import { GoIssueClosed } from "react-icons/go";

const CategoryCard=({id,name,description,refreshAfterDelete})=>{

    const deleteCategory= async(id)=>{

        const response= await fetch(`http://localhost:5000/api/categories/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });

        const data=await response.json();
        refreshAfterDelete();
       
      }
    
    return (
        
            <div className="card p-4 pt-2 flex flex-col justify-between h-[auto]  border-green-500 rounded-lg shadow-2xl" >
                <h3 className="font-semibold text-lg m-1 e">{name}</h3>            
                <section className="description text-lg">
                {description}
                </section>
                <div className="w-full p-1 m-1 self-end justify-end gap-5 flex">
                    <button className="actionbutton">
                        <FaEdit></FaEdit>
                    </button>
                    <button className="actionbutton">
                        <FaInfo></FaInfo>
                    </button>
                    <button className="actionbutton" onClick={()=>deleteCategory(id)}>
                         <GoIssueClosed></GoIssueClosed>
                    </button>
                
               
                </div>
               
            </div>
           

        
    )
}

export default CategoryCard;