import React from 'react'
import logo from '../assets/logo.jpg'
import galler1 from '../assets/galler1.jpg';
import galler2 from '../assets/gal3.jpg';
import galler3 from '../assets/gal4.jpeg';
import galler4 from '../assets/gal5.jpg';
import galler5 from '../assets/gal6.jpg';
import galler6 from '../assets/culture.jpg';
import galler7 from '../assets/romatic.png'
import galler8 from '../assets/adventur.jpg'
import galler9 from '../assets/gal8.jpg'


// import galler1 from '../assets/gallery.jpg';

const Gallery = () => {
    return (
        <div className=' flex justify-center items-center flex-col'>
            <h1 className='py-5 text-[2rem] text-Black my-5'>
                Gallery
            </h1>
            <section className=' text-cyan-50  w-[90%] h-auto py-6 flex justify-center items-center flex-col md:w-[80%] bg-[#ffffff] mt-[1rem] rounded-[1rem] bg-center bg-no-repeat tracking-[3px]'>
                <div className='container'>
                    <div className='image-container'>
                        <div className=' hover:-translate-y-2 transition-all ease-in-out' >
                            <img src={galler1} alt="image" />
                        </div>
                        <div className=' hover:-translate-y-2 transition-all ease-in-out' >
                            <img src={galler2} alt="image" />
                        </div><div className=' hover:-translate-y-2 transition-all ease-in-out' >
                            <img src={galler3} alt="image" />
                        </div><div className=' hover:-translate-y-2 transition-all ease-in-out' >
                            <img src={galler4} alt="image" />
                        </div>
                        <div className=' hover:-translate-y-2 transition-all ease-in-out' >
                            <img src={galler6} alt="image" />
                        </div>
                        <div className=' hover:-translate-y-2 transition-all ease-in-out' >
                            <img src={galler5} alt="image" />
                        </div>
                        <div className=' hover:-translate-y-2 transition-all ease-in-out' >
                            <img src={galler7} alt="image" />
                        </div>
                        <div className=' hover:-translate-y-2 transition-all ease-in-out' >
                            <img src={galler8} alt="image" />
                        </div>
                        <div className=' hover:-translate-y-2 transition-all ease-in-out' >
                            <img src={galler9} alt="image" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery;