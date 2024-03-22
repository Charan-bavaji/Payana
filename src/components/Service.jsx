import React from 'react'
import CardServices from './CardServices'

const Service = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <section className=" w-[90%] h-suto py-6 flex justify-center items-center flex-col md:w-[80%] mt-[1rem] rounded-[1rem] bg-center bg-no-repeat tracking-[3px]">
                <h1 className='py-5 text-[2rem] text-Black my-5'>
                    Services
                </h1>
                <div className='w-80% flex flex-row justify-center items-center flex-wrap gap-6'>
                    <article>
                        <CardServices />
                    </article>
                    <article>
                        <CardServices />
                    </article>
                    <article>
                        <CardServices />
                    </article>

                </div>
            </section>
        </div >
    )
}

export default Service
