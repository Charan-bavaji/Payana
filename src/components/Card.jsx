import React, { useState } from 'react'
// import product1 from '../assets/formImg.jpg'
// import bgimag from '../assets/detailsimg.jpg'
import { Rating } from '@mui/material';
const Card = (props) => {

    const [rating, setRating] = useState(3);
    // const img = props.img;
    return (
        <div>
            <div className=' w-[16rem] h-[16rem] flex flex-col justify-between text-black tracking-normal overflow-hidden rounded-2xl bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${props.img})` }}>
                {/* <img src={bgimag} alt="img" width={200} /> */}
                <article className=' flex justify-between gap-5'>
                    <span className='p-2 rounded-full backdrop-blur-sm bg-white/10 '>{props.days}</span>
                    {/* <p className='p-2  backdrop-blur-sm bg-white/10 '>*4.6</p> */}
                </article>
                <article className=' flex flex-row backdrop-blur-[1px] bg-black/10 p-2 m-2 rounded-xl text-white font-semibold tracking-wide'>
                    <div>
                        <Rating
                            name="simple-controlled"
                            onChange={(e) => setRating(e.target.value)}
                            value={rating}
                        />
                        <span className='text-sm'>
                            {props.date}
                        </span>
                        <span className='flex gap-4 text-[14px]'>
                            {props.pack}
                        </span>
                    </div>
                    <div>
                        <p className='text-[20px]'>${props.prize}</p>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Card;
