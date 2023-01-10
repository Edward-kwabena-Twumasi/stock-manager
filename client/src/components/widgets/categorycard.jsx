import { Link } from "react-router-dom";


const CategoryCard=({image,name,description})=>{
    
    return (
        
            <div className="card p-4 pt-2 flex flex-col" >
                <h3 className="font-semibold text-lg m-1 text-white">{name}</h3>
                
                <section className="description text-white text-lg">
                {description}
                </section>
                
                <section className="actions flex gap-7 justify-around  w-4/5 absolute">
                    <button>All products</button>
                </section>
            </div>
           

        
    )
}

export default CategoryCard;