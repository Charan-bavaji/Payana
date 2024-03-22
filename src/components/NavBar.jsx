import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navContent = [
        { name: "Home" },
        { name: "Package" },
        { name: "Gallery" },
        { name: "Services" },
        { name: "Contact" },
        { name: "About" }

    ];
    const scrollDown = () => {
        const scrollCal = window.innerHeight * 0.6;
        window.scrollBy({
            top: scrollCal,
            behavior: 'smooth',
        });
    }

    const [lists, setLists] = useState(false);
    const displayList = () => {
        setLists(!lists);
    }
    return (
        <>
            <div className="w-full h-24 flex justify-center items-center bg-inherit z-50 fixed ">
                <div className="w-auto md:w-auto h-16 backdrop-blur-sm bg-black/10 flex justify-between items-center rounded-full">
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
                            {
                                navContent.map((item) => (
                                    <li key={item.name} className=" group p-3 text-md tracking-[2px] transition duration-150 ease-in-out hover:-translate-y-2 cursor-pointer">
                                        <span className=' group-hover:text-[#847242] font-light'>{item.name}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="p-2 m-2 w-auto flex gap-4">
                        {/* <span className="material-symbols-outlined rounded-full p-1 hover:bg-[#c59b5c] hover:text-black cursor-pointer transition duration-150 ease-in-out hover:-translate-y-2" onClick={scrollDown}>
                            keyboard_double_arrow_down
                        </span> */}
                        <button className='py-1 px-4 md:py-2 md:px-6 rounded-xl text-black  border-[2px] border-[#737372]'>
                            Login
                        </button>
                        <button className='py-1 px-4 md:py-2 md:px-6 rounded-xl  text-black  border-[2px] border-[#737372]'>
                            sigIn
                        </button>
                    </div>
                </div>
            </div>

            {lists && <div className="fixed top-24 w-[90%] h-auto flex flex-col justify-center items-center backdrop-blur-sm bg-black/20 md:hidden z-50 left-5 rounded-2xl">
                {
                    navContent.map((item) => (
                        <div key={item.name} className='py-3 m-1 px-20 text-md  transform ease-in-out delay-150 tracking-[0.1rem] hover:tracking-[0.2rem]  hover:animate-bounce'>
                            <span className='text-black'>{item.name}</span>
                        </div>
                    ))
                }
                {/* <div className="p-2 m-2 w-auto flex gap-4">
                    <button className='py-2 px-6 rounded-xl bg-red-300'>
                        Login
                    </button>
                    <button className='py-2 px-6 rounded-xl bg-red-300'>
                        sigIn
                    </button>
                </div> */}
            </div >}
        </>
    )
}

export default NavBar;
