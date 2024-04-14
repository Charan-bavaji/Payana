import React, { useState } from 'react'

const Options = ({ name, options }) => {

    return (
        <div className=' border-b-2 border-gray-400 md:w-[60%] flex pb-3 pt-4 text-gray-600 '>
            <label htmlFor="from" className='w-[10%] text-gray-900 font-semibold'>{name}</label>
            <select name="" id="from" className='w-[80%] bg-transparent ml-12 focus:outline-none'>
                <option value="" >Select an Options</option>
                {options.map((option, index) => (
                    <option key={index} value="" >{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Options;
