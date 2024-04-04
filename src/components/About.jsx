import React from 'react'
import about from "../assets/about.png"
const About = () => {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center my-20">
            <section className='w-full h-auto'>
                <div className=' absolute left-[15%] sm:left-[20%]'>
                    <h1 className='text-[1.5rem] sm:text-[2rem] md:text-[4rem]'>About our community</h1>
                </div>
                <div className='absolute md:w-[40%] text-center p-10 bg-gray-100 md:left-9 translate-y-52 sm:translate-y-64 md:translate-y-48 rounded-lg'>
                    <h1 className='text-[2rem]'>Why Choose PAYANA?</h1>
                    <p className=' text-gray-700'>Our founder Bruce Poon Tip emptied his bank account to start our company. So we never take your choice to spend your hard-earned money with us for granted. Our award-winning trips embrace our broader definition of community tourism to put travellers like you on a first-name basis with the planet’s people, cultures, landscapes and wildlife. Here are just a few of the things we offer:</p>
                </div>
                <div className='absolute md:w-[40%] text-center p-10 bg-white md:left-[55%] translate-y-[100%] sm:translate-y-[160%] md:translate-y-[120%] rounded-lg'>
                    <h1 className='text-[2rem]'>Our diversity & inclusion commitments</h1>
                    <p className='text-gray-700'>Racism and discrimination have no place in our global community. We are committed to improving diversity within all of our operations. <br />
                        Core values? Yup, we’ve got ‘em. And we live by them every single day. If you’ve ever interacted with someone who works at PAYANA, you’ve met with someone who strives to embody our values and welcome you into our community.
                    </p>
                </div>
                <img src={about} alt="img" width={1600} className='w-full' />
            </section>
        </div>
    )
}

export default About;
