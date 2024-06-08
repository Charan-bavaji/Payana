import React from 'react'
import Choice from './Choice'
import Products from './Products'
import Service from './Service'
import Gallery from './Gallery'
import { exprence } from '../assets/data'
import ExplorerCard from './ExplorerCard'
import PlanNextTrip from './PlanNextTrip'
import Login from "./Login";
import Register from './Register'
import NavBar from './NavBar'
import About from './About'
Products
const Home = () => {
    return (
        <div >
            <div className=' top-0 left-0 right-0 z-50 fixed'>
                <NavBar></NavBar>
            </div>
            <section className=" w-full flex justify-center items-center">
                <div className=" w-[95%] h-[80vh]  rounded-[1rem] background bg-center bg-no-repeat tracking-[3px] mb-20 mt-28 shadow-2xl">
                    <article className=' text-white flex flex-col justify-center text-center w-auto h-full p-3 '>
                        <section className=" ">
                            <div className='w-auto flex justify-center flex-col gap-0 text-[2rem]'>
                                <h1 className=' text-[38px] md:text-[52px] tracking-wide font-semibold'>Extraordinary natural and <br /> Cultural
                                    <span className='animat text-[30px]  pb-[2px] pr-[16px] pl-[16px] rounded-lg bg-gray-900  text-[#eccf5be3]'></span>
                                </h1>
                                {/* <h1 className='pb-[2px] pr-[16px] pl-[16px] rounded-lg bg-gray-900  text-[#eccf5be3]'>XYZ</h1> */}
                                <span className='tracking-normal text-[16px]'>Adventure is a form of self care.</span>
                            </div>
                        </section>
                        <section className=" flex justify-center flex-col flex-wrap items-center gap-[20px]">

                            <div className=" mt-[3rem]">
                                <button className='text-black py-[6px] px-[2rem] md:py-2 md:px-6 rounded-xl bg-[#eccf5be3] hover:-translate-y-2 transition-all ease-in-out'>
                                    EXPLORE
                                </button>
                            </div>
                        </section>
                    </article>
                    <div className=' w-full  relative -top-8 flex justify-center items-center gap-6'>
                        <div className='flex gap-2'>
                            {
                                exprence.map((item) => (
                                    <div key={item.id} className='bg-gray-200  border-[2px] border-[#dddddd] text-center hover:-translate-y-1 transition-all ease-in-out w-20 sm:py-2  sm:w-40 rounded-xl flex justify-center items-center flex-col'>
                                        < h1 className=' tracking-wide font-semibold sm:text-[22px]' > {item.number}</h1>
                                        <span className=' tracking-wide font-extralight text-[14px] sm:text-[12px] text-black'>
                                            {item.text}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div >
            </section >
            <section>
                <PlanNextTrip />
            </section>
            <section className='mb-20'>
                <Products />
            </section>
            <section className='mb-20'>
                <Service />
            </section>
            <section className='mb-20'>
                <Gallery />
            </section>
            <section className='mb-20'>
                <Choice />
            </section>
            <section className='mb-20'>
                <About />
            </section>
        </div >
    )
}

export default Home;
