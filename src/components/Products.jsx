import React from 'react'
import Card from './Card'
import { packages } from '../assets/data'
const Products = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center my-20">
            <h1 className='p-5 text-[2rem] text-Black'>
                Products
            </h1>
            <section className=" w-[90%] h-suto py-6 flex justify-center items-center flex-wrap gap-10 md:w-[80%] bg-[#fcffff] mt-[1rem] rounded-[1rem] bg-center bg-no-repeat tracking-[3px]">
                {
                    packages.map((pack) => (
                        <Card key={pack.id}
                            days={pack.days}
                            date={pack.date}
                            rating={pack.rating}
                            pack={pack.packName}
                            prize={pack.prize}
                            img={pack.img} />
                    ))
                }
            </section>
        </div>
    )
}

export default Products
