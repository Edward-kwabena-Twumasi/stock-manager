import { forwardRef } from "react"

const Modal=forwardRef((props,ref)=>{
    return (
        <div className="modal" >
            <form ref={ref}  className="flex flex-col shadow-2xl justify-center font-bold content-center p-5 gap-3" onSubmit={props.onFormSubmit} onChange={props.onFormChange}>
            {props.Children}
            <div className="flex justify-start gap-5 w-full">
                 <input  className="formbutton w-1/3" type={"submit"} name="Submit"></input>
                 <button  className="outlinedbutton w-1/3">Cancel</button>
            </div>
           
            </form>    
        
        </div>
    )
})
export default Modal