import React, { useState } from 'react'
import titleImg from "../assets/rocket.png"
import Options from '../utils/Options'
const PlanNextTrip = () => {
    const from = {
        name: "From",
        options: ["Bengaluru", "Delhi", "Mumbai", "Kolkata", "Kochi", "Jaipur", "Ahmedabad", "others"]
    };
    const to = {
        name: "Package",
        options: ["Ooty&Kodaikanel", "Bandipura Bilss Safari", "Desert Tour", "Dubai Tour Packages", "Singapore Tour", "Bali Tour", " Mauritius Tour", "Vietnam Tour"]
    }
    const days = {
        name: "Days",
        options: ["2 ", "5", "7", "10", "12",]

    }
    const class1 = {
        name: "Class",
        options: ["Silver", "Gold", "Dimond", "Dimond++"]

    }
    return (
        <div className="w-full flex flex-col justify-center items-center my-20">
            <section className='w-[90%] flex justify-center items-center flex-col '>
                <div className='flex justify-center items-center '>
                    <h1 className='p-5 text-[1.5rem] sm:text-[2rem] text-Black'>
                        Plan Your Next Trip
                    </h1>
                    <img src={titleImg} alt="img" className=' size-14' />
                </div>
                <section className='w-full h-auto sm:h-[60vh] bg-slate-600 bgcolor mt-4 rounded-lg'>
                    <div className='absolute left-7 top-[150%] sm:left-24  md:top-[150%] md:left-38 lg:left-52 lg:top-[135%]' >
                        <h1 className='  text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] xl:text-[18rem] opacity-5'>PAYANA</h1>
                    </div>
                    <div className='relative w-full h-full flex justify-center flex-wrap items-center'>
                        <div className=' hidden w-[30%] h-full sm:flex justify-end items-center'>
                            <h1 className=' sm:text-[3rem] md:text-[5rem] -rotate-90'>PAYANA</h1>
                        </div>
                        <div className='w-full sm:w-[70%] h-full'>
                            <form action="" className='p-10 mt-5'>
                                <Options name={from.name} options={from.options} />
                                <Options name={to.name} options={to.options} />
                                <Options name={days.name} options={days.options} />
                                <div className=' border-b-2 border-gray-400 w-[60%] flex flex-wrap pb-3 pt-4 gap-1 text-gray-600  '>
                                    <label htmlFor="Date" className='sm:w-[4rem] text-gray-900 font-semibold '>Date F</label>
                                    <input type='date' className=' sm:w-[35%] bg-transparent' />
                                    <label htmlFor="Date" className='sm:w-[5rem] text-gray-900 font-semibold'>Date T</label>
                                    <input type='date' className='sm:w-[35%] bg-transparent' />
                                </div>
                                <Options name={class1.name} options={class1.options} />
                            </form>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default PlanNextTrip
