import { NavLink,Outlet } from "react-router-dom"
import {FaObjectGroup} from "react-icons/fa"
import {GoPerson} from "react-icons/go"
import {GoTasklist} from "react-icons/go"
import {FaPhone} from "react-icons/fa"
import { BiMoney, BiSpreadsheet } from "react-icons/bi"

const Home=()=>{
    return (
        <div className="flex w-screen h-screen">
            <div className='sidenav h-full w-1/12 bg-green-700 fixed  z-20 lg:flex lg:flex-col justify-start gap-5  hidden'>
                <div className={`border-[#ffe4c4] w-[60px] h-[60px] rounded-full self-center ease-switch flex flex-col justify-center text-white text-3xl  `} >
                <NavLink  activeclassname="border-4 shadow-2xl"  className='self-center' to="dashboard"><BiSpreadsheet /></NavLink> 
                </div>
                <div className={`border-[#ffe4c4] w-[60px] h-[60px] rounded-full self-center ease-switch flex flex-col justify-center text-white text-3xl `} >
                <NavLink  activeclassname="border-4 shadow-2xl" className='self-center' to="categories"><FaObjectGroup ></FaObjectGroup></NavLink>
                </div>
                <div className={`border-[#ffe4c4] w-[60px] h-[60px] rounded-full self-center ease-switch flex flex-col justify-center text-white text-3xl `} >
                <NavLink  activeclassname="border-4 shadow-2xl" className='self-center' to="products"><GoTasklist ></GoTasklist></NavLink>
                </div>
                <div className={`border-[#ffe4c4] w-[60px] h-[60px] rounded-full self-center ease-switch flex flex-col justify-center text-white text-3xl `} >
                <NavLink  activeclassname="border-4 shadow-2xl" className='self-center' to="invoices"><BiMoney ></BiMoney></NavLink>
                </div>
                <div className={`border-[#ffe4c4] w-[60px] h-[60px] rounded-full self-center ease-switch flex flex-col justify-center text-white text-3xl `} >
                <NavLink  activeclassname="border-4 shadow-2xl" className='self-center' to="about"><GoPerson ></GoPerson></NavLink>
                </div>
            </div>
            <div className="w-11/12 h-full  ml-[8.4%]">
                <Outlet/>
            </div>
            
        </div>
    )
}

export default Home