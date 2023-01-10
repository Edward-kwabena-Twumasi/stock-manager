import { Children } from "react"

const Modal=({Children})=>{
    return (
        <div className="modal flex flex-col shadow-2xl justify-center font-bold content-center p-5 gap-3">
        {Children}
        </div>
    )
}
export default Modal