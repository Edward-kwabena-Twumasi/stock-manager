

const ProductCard=({category,name,description,stock,threshold})=>{

const StatusBadge=()=>{
    if (stock>threshold) {
        return <h5 className="p-1 px-2 border-2 border-green-500 text-green-500 font-bold rounded-full">In stock</h5>
    } else {
        return <h5 className="p-1 px-2 border-2 border-red-500 text-red-500 font-bold rounded-full">Refill</h5>
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
            <div className="flex justify-between  gap-6">
                <h5>{stock} remaining</h5>
                <StatusBadge></StatusBadge>
            </div>
        
        </div>
         )
}

export default ProductCard;