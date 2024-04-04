import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navContent = [
        { name: "Home" },
        { name: "Package" },
        { name: "Gallery" },
        { name: "Services" },
        { name: "Contact" },
        { name: "About" }

    ];


    const [lists, setLists] = useState(false);
    const displayList = () => {
        setLists(!lists);
    }
    return (
        <>
            <div className="w-full h-24 flex justify-center items-center bg-inherit z-50  ">
                <div className="w-[25rem] md:w-[45rem] h-16 backdrop-blur-sm bg-black/10 flex justify-between items-center rounded-full">
                    <div className=" p-3 m-1 md:hidden flex justify-center items-center">
                        <span className="material-symbols-outlined rounded-full p-1.5 text-black hover:bg-slate-400 cursor-pointer transition duration-150 ease-in-out hover:-translate-y-2"
                            onClick={displayList}
                        >
                            menu_open
                        </span>
                    </div>
                    <div className=" ">
                        <span id='font' className="font-sans px-4 font-bold text-2xl text-[#000000cf]">
                            Payana
                        </span>
                    </div>
                    <div className=" p-2 ">
                        <ul className="hidden md:flex justify-center items-center text-black">
                            {/* { 
                                navContent.map((item) => (
                                */}
                            {/* //     ))
                            // } */}
                            <li className="  p-3 text-md tracking-[2px] transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer">
                                <span className='  font-light'>Home</span>
                            </li>
                            <li className="  p-5 text-md tracking-[2px]  transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer" onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}  >
                                <span className='font-light'>Package </span>
                                <div className={`absolute top-[4rem] -translate-x-20 translate-y-1 backdrop-blur-sm bg-black/10 px-20  transform delay-150 ease-in-out ${isHovered ? "block" : "hidden"}`}>
                                    <ul>
                                        <li>India</li>
                                        <li>UAE</li>
                                        <li>Desert</li>
                                        <li>Bali</li>
                                    </ul>
                                </div>
                            </li><li className="  p-3 text-md tracking-[2px] transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer">
                                <span className='  font-light'>Gallery</span>
                            </li><li className="  p-3 text-md tracking-[2px] transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer">
                                <span className='  font-light'>Services</span>
                            </li><li className="  p-3 text-md tracking-[2px] transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer">
                                <span className=' font-light'>Contact</span>
                            </li><li className="  p-3 text-md tracking-[2px] transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer">
                                <span className='  font-light'>About</span>
                            </li>
                        </ul>

                    </div>
                    <div className="p-2 m-2 w-auto flex gap-4">
                        {/* <span className="material-symbols-outlined rounded-full p-1 hover:bg-[#c59b5c] hover:text-black cursor-pointer transition duration-150 ease-in-out hover:-translate-y-2" onClick={scrollDown}>
                            keyboard_double_arrow_down
                        </span> */}
                        <Link to="/login">
                            <button className='py-1 px-4 md:py-2 md:px-6 rounded-xl text-black  border-[2px] border-[#737372] transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer'>
                                login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className='py-1 px-4 md:py-2 md:px-6 rounded-xl  text-black  border-[2px] border-[#737372] transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer'>
                                sigIn
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {lists && <div className="fixed top-24 w-[90%] h-auto flex flex-col justify-center items-center backdrop-blur-sm bg-black/20 md:hidden z-50 left-5 rounded-2xl">
                {
                    navContent.map((item) => (
                        <div key={item.name} className='py-3 m-1 px-20 text-md  transform ease-in-out delay-150 tracking-[0.1rem] hover:tracking-[0.2rem] '>
                            <span className='text-black'>{item.name}</span>
                        </div>
                    ))
                }

            </div >}
        </>
    )
}

export default NavBar;
