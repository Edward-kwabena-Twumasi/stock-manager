import { useState } from "react"

const Modal=(props)=>{

    let dataModel=props.dataModel;
    
    const [formData,setFormData]=useState({...dataModel})

       const onFormSubmit= async(e)=>{
        e.preventDefault();
        const response= await fetch(`http://localhost:5000/api/home/${props.path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

        const data=await response.json();
        props.dismissModal(data)
      }

      const updateFormData=(value)=> {
         setFormData((prev) => {
        return { ...prev, ...value };
        });
      }

      const onFormChange=async(e)=>{
        e.preventDefault();       
        let activeInputData={}
        activeInputData[e.target.name]=e.target.value

        updateFormData(activeInputData)
        console.log(formData)
      }
     
    return (
        <div className="modal" >
            <form   className="flex flex-col shadow-2xl justify-center font-bold content-center p-5 gap-3" onSubmit={onFormSubmit} onChange={onFormChange} onKeyUp={onFormChange}>
            {props.formElements}
            <div className="flex justify-start gap-5 w-full">
                 <input  className="formbutton w-1/3" type={"submit"} name="Submit"></input>
                 <button  className="outlinedbutton w-1/3">Cancel</button>
            </div>
           
            </form>    
        
        </div>
    )
}
export default Modal