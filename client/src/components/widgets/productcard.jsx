

const ProductCard=({category,name,description,stock,threshold})=>{
    return (
        <div className="tile lg:w-[400px] w-[290px] h-auto flex flex-col text-white m-3 bg-slate-500 p-4 rounded-md" >
            <section className="flex flex-col gap-5 h-6 w-full">
                <div className="title font-bold">
                {name}
                </div>
                <div className="subtitle font-normal">
                {category}
                </div>
            </section>
            <p className="ml-5 mt-3 h-auto text-sm w-11/12">
                {description}
            </p>
            <div className="flex justify-start gap-6">
                <h5>{stock}</h5>
                <h5 className="p-3 border-2 border-red-500 text-red-500 font-bold rounded-full">{threshold>stock?"In stock":"out of stock"}</h5>
            </div>
        
        </div>
         )
}

export default ProductCard;