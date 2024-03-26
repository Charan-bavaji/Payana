import React from 'react'
import CardServices from './CardServices'
import support from "../assets/technical-support.png";
import heath from "../assets/healthcare.png"
import hotels from '../assets/skyscraper.png'
// import { services } from '../assets/data'
const Service = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <section className=" w-[90%] h-suto py-6 flex justify-center items-center flex-col md:w-[80%] mt-[1rem] rounded-[1rem] bg-center bg-no-repeat tracking-[3px]">
                <h1 className='py-5 text-[2rem] text-Black my-5'>
                    Services
                </h1>
                <div className='w-80% flex flex-row justify-center items-center flex-wrap gap-6'>
                    <article>
                        <CardServices
                            icons={support}
                            title={"24/7 Support"}
                            desc={"Travel the World with Global Peace of Mind. Buy Your Plan Today from IMG® - Official Site. Get Quotes & Compare IMG Insurance Plans To Protect Your Health & Trip Costs"}
                        />
                    </article>
                    <article>
                        <CardServices
                            icons={hotels}
                            title={"Best Star Hotels"}
                            desc={"Travel the World with Global Peace of Mind. Buy Your Plan Today from IMG® - Official Site. Get Quotes & Compare IMG Insurance Plans To Protect Your Health & Trip Costs"}
                        />
                    </article>
                    <article>
                        <CardServices
                            icons={heath}
                            title={"Safty and Care"}
                            desc={"Travel the World with Global Peace of Mind. Buy Your Plan Today from IMG® - Official Site. Get Quotes & Compare IMG Insurance Plans To Protect Your Health & Trip Costs"}
                        />
                    </article>

                </div>
            </section>
        </div >
    )
}

export default Service
