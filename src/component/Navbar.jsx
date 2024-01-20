import React, { useState } from 'react'
import Logo from '../images/logo (1).png'
import Img from '../images/cloud.png'
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";



const Navbar = () => {

     let [show, setShow] = useState(false)
     let handleShow = ()=>{
        setShow(!show)
     }

  return (
   <section className='max-w-container mx-auto'>

    <div className="flex items-center">
        <div className="w-1/2 "><img className='w-[250px] h-[70px]' src={Logo} alt="" /></div>

        <div className="w-1/2">
            <ul className={`lg:flex gap-8 absolute left-0 top-0 lg:static ${show ? 'top-[80px] w-full left-0 bg-[green] text-center duration-500' :'top-[-200px] left-0 w-full duration-500 ' } `}>
                <li><a className='sm:text-white lg:text-black text-[20px] font-[rem] font-[500] hover:text-[#EA580C]' href="">Home</a></li>
                <li><a className='sm:text-white lg:text-black text-[18px] font-[ABeeZee] font-[500] hover:text-[#EA580C] ' href="">About</a></li>
                <li><a className='sm:text-white lg:text-black text-[18px] font-[ABeeZee] font-[500] hover:text-[#EA580C] ' href="">Service</a></li>
                <li><a className='sm:text-white lg:text-black text-[18px] font-[ABeeZee] font-[500] hover:text-[#EA580C] ' href="">Contact</a></li>
                
                <div className=" sm:w-[150px] justify-center mx-auto sm:mt-3 lg:mt-0 lg:w-[200px] flex bg-[#EA580C] items-center rounded-md hover:bg-[red] duration-500">
                    <div className="sm:w-full sm:px-1 text-center  justify-center mx-auto lg:pl-5"><img src={Img} alt="" /></div>
                    <div className="sm:w-full sm:px-6 text-center justify-center mx-auto lg:px-8 py-2 text-white "><a href="">Download</a></div>
                </div>
            </ul>
        </div>

        <div className="lg:hidden" onClick={handleShow}>
          {show == true ? <ImCross /> : <FaBars />}
        </div>
    </div>
   </section>
  )
}

export default Navbar