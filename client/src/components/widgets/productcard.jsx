import { FaEdit, FaInfo } from "react-icons/fa"
import { GoIssueClosed } from "react-icons/go"


const ProductCard=({id,category,name,description,stock,threshold,refreshAfterDelete})=>{
    const deleteCategory= async(id)=>{

        const response= await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });

        const data=await response.json();
        refreshAfterDelete();
       
      }

    const StatusBadge=()=>{
        if (stock>threshold) {
            return <h5 className="p-[2px] px-2 border-2 border-green-500 text-green-500 font-bold rounded-full">In stock</h5>
        } else {
            return <h5 className="p-[2px] px-2 border-2 border-red-500 text-red-500 font-bold rounded-full">Refill</h5>
        }
        

    }

    return (
        <div className="tile lg:w-[400px] w-[290px] h-auto flex flex-col gap-1  m-3 shadow-xl p-4 rounded-md" >
            <section className="flex flex-col gap-2 h-[auto] w-full">
                <div className="title font-bold">
                {name}
                </div>
                <div className="subtitle font-normal">
                {category}
                </div>
            </section>
            <p className="description mt-3 self-start h-auto text-sm w-11/12">
                {description}
            </p>
            <div className="flex justify-start  gap-6">
                <h5><span className="font-bold text-xl">{stock}</span>  remaining</h5>
                <StatusBadge></StatusBadge>
            </div>
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

export default ProductCard;