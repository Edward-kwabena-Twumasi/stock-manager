import { Link } from "react-router-dom";


const CategoryCard=({image,name,description})=>{
    
    return (
        
            <div className="card p-4 pt-2 flex flex-col justify-center h-[150px]  border-green-500 rounded-lg shadow-2xl" >
                <h3 className="font-semibold text-lg m-1 e">{name}</h3>
                
                <section className="description text-lg">
                {description}
                </section>
                
               
            </div>
           

        
    )
}

export default CategoryCard;