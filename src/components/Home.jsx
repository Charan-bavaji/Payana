import React from 'react'
import Choice from './Choice'
import Products from './Products'
import Service from './Service'
import Gallery from './Gallery'
import { exprence } from '../assets/data'
import ExplorerCard from './ExplorerCard'
import PlanNextTrip from './PlanNextTrip'
Products
const Home = () => {
    return (
        <div >
            <section className=" flex justify-center items-center">
                <div className=" w-[95%] h-[80vh]  rounded-[1rem] background bg-center bg-no-repeat tracking-[3px]  mb-20  mt-28 shadow-2xl">
                    <article className=' text-white flex flex-col justify-center text-center w-auto h-full p-3 '>
                        <section className=" ">
                            <div className='w-auto flex justify-center flex-col gap-0 text-[2rem]'>
                                <h1 className='text-[52px] tracking-wide font-semibold'>Extraordinary natural and <br /> Cultural
                                    <span className='animat pb-[2px] pr-[16px] pl-[16px] rounded-lg bg-gray-900  text-[#eccf5be3]'></span>
                                </h1>
                                {/* <h1 className='pb-[2px] pr-[16px] pl-[16px] rounded-lg bg-gray-900  text-[#eccf5be3]'>XYZ</h1> */}
                                <span className='tracking-normal text-[16px]'>Lorem ipsum dolor sit amet b. Eos quas consectetur aperia</span>
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
                    <div className=' w-[95%]  relative -top-8 flex justify-center gap-6'>
                        {
                            exprence.map((item) => (
                                <div key={item.id} className='bg-gray-200  border-[2px] border-[#dddddd] hover:-translate-y-1 transition-all ease-in-out  py-2 w-40 rounded-xl flex justify-center items-center flex-col'>
                                    < h1 className=' tracking-wide font-semibold text-[22px]' > {item.number}</h1>
                                    <span className=' tracking-wide font-extralight text-[12px] text-black'>
                                        {item.text}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div >
            </section >
            <section>
                {/* <ExplorerCard /> */}
            </section>
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
        </div >
        // text #d6b171
        // bg #353635
        // border #353635
        // button border #f0a46b
    )
}

export default Home;
