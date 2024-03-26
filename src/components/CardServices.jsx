import React from 'react'

const CardServices = (props) => {

    return (
        <div>
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 flex justify-center items-center -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img src={props.icons} alt="images" width={100} />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {props.title}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit tracking-normal antialiased">
                        {props.desc}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black/20 transition-all hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Read More
                    </button>
                </div>

            </div>

        </div>
    )
}

export default CardServices;