import React from 'react'
import SocialMedia from './SocialMedia';

const Footer = () => {
    return (
        <div className=' flex justify-center items-center mt-[45rem] sm:mt-[29rem] lg:mt-[0rem]'>
            <section className='flex-col sm:flex md:flex-row lg:flex-row xl:flex-row text-cyan-50 tracking-normal w-full h-auto py-6 bg-[#1a1a1a] mt-[1rem]'>
                <article className=' md:w-[50%] flex justify-center items-start gap-10'>
                    <div className=''>
                        <h1 className=' text-2xl'>Community</h1>
                        <ul className='text-sm tracking-wider py-2 flex flex-col gap-2'>
                            <li>Blog</li>
                            <li>Newsletter</li>
                            <li>Brochures</li>
                            <li>Affiliate program</li>

                        </ul>
                    </div>
                    <div>
                        <h1 className=' text-2xl'>Support</h1>
                        <ul className='text-sm tracking-wider py-2 flex flex-col gap-2'>
                            <li>Contact us</li>
                            <li>Go Adventures</li>
                            <li>Travel resources</li>
                            <li>Pre-departure info</li>
                            <li>Safety updates</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className=' text-2xl'>FAQ</h1>
                        <ul className='text-sm tracking-wider py-2 flex flex-col gap-2'>
                            <li>Antarctica</li>
                            <li>Booking Related</li>
                            <li>Galápagos</li>
                            <li>Kilimanjaro Trek</li>
                            <li>Travel Agents</li>
                        </ul>
                    </div>
                </article>
                <article className='md:w-[50%] flex flex-col justify-center items-center md:justify-start md:items-start gap-2 m-2 md:m-0'>
                    <h1 className='text-3xl'>
                        Newsletter
                    </h1>
                    <span className='text-sm text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing  <br />
                        bLorem consectetur adipisicing
                    </span>
                    {/* <input type="email" name="" id="" placeholder='Enter your email' /> */}
                    <div className="mt-1 w-[24rem] flex gap-2">
                        <input id="email" placeholder='Enter your email' required name="email" type="email" autoComplete="email" maxLength={30} className=" px-4 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                        <button className='border-[1px] px-6 rounded-lg'>Submit</button>
                    </div>
                    <div className='py-5'>
                        <SocialMedia></SocialMedia>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Footer;
