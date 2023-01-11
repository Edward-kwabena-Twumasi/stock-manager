import { Children } from "react"

const Modal=({Children,onFormSubmit,onFormChange})=>{
    return (
        <div className="modal ">
            <form className="flex flex-col shadow-2xl justify-center font-bold content-center p-5 gap-3" onSubmit={onFormSubmit} onChange={onFormChange}>
            {Children}
            <div className="flex justify-start gap-5 w-full">
                 <button  className="formbutton w-1/3">Submit</button>
                 <button  className="outlinedbutton w-1/3">Cancel</button>
            </div>
           
            </form>    
        
        </div>
    )
}
export default Modal