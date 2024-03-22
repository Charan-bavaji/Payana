import React from 'react'

const Footer = () => {
    return (
        <div className=' flex justify-center items-center'>
            <section className=' text-cyan-50 tracking-normal  w-full h-auto py-6 flex bg-[#1a1a1a] mt-[1rem] bg-center bg-no-repeat'>
                <article className=' w-[50%] flex justify-center items-center gap-10'>
                    <div className=''>
                        <h1 className=' text-2xl'>About</h1>
                        <ul className='text-lg tracking-wider py-2 flex flex-col gap-2'>
                            <li>dhsss</li>
                            <li>dhdbd</li>
                            <li>djbdj</li>
                            <li>knks</li>
                            <li>ssjss</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className=' text-2xl'>Service</h1>
                        <ul className='text-lg tracking-wider py-2 flex flex-col gap-2'>
                            <li>dhsss</li>
                            <li>dhdbd</li>
                            <li>djbdj</li>
                            <li>knks</li>
                            <li>ssjss</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className=' text-2xl'>FAQ</h1>
                        <ul className='text-lg tracking-wider py-2 flex flex-col gap-2'>
                            <li>dhsss</li>
                            <li>dhdbd</li>
                            <li>djbdj</li>
                            <li>knks</li>
                            <li>ssjss</li>
                        </ul>
                    </div>
                </article>
                <article className='w-[50%] flex flex-col gap-2'>
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
                </article>
            </section>
        </div>
    )
}

export default Footer;
