import React, { useState } from 'react'
import payana from '../assets/payana.jpeg'
const PlanNextTrip = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("GOLD");
    const [country, setCountry] = useState("India");
    const [desc, setDesc] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangeType = (event) => {
        setType(event.target.value);
    }
    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    }
    const handleChangeDesc = (event) => {
        setDesc(event.target.value);
    }
    const displayAll = () => {
        alert(name + email + type + country + desc);
    }
    return (
        <div className="w-full  flex flex-col justify-center items-center my-20">
            <h1 className='p-5 text-[2rem] text-Black'>
                Plan Your Next Trip</h1>
            <div className='w-[85%] flex rounded-xl gradient'>
                <section className='w-[50%] h-[50vh] flex items-center justify-center'>
                    <img src={payana} alt="" />
                </section>
                <section className='w-[50%] h-auto  m-2 flex justify-center items-center flex-col rounded-4xl text-black'>
                    <div className="border-b border-gray-900/10 pb-5">
                        <div className="mt-0 grid grid-cols-1 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">Name</label>
                                <div className="mt-1">
                                    <input type="text" onChange={handleChangeName} required name="first-name" id="first-name" maxLength={16} autoComplete="given-name" className="block w-full rounded-md border-0 py-1 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-4  p-1">
                                <label htmlFor="email" className="block text-sm font-medium leading-6">Email address</label>
                                <div className="mt-1">
                                    <input id="email" required name="email" onChange={handleChangeEmail} type="email" autoComplete="email" maxLength={30} className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-3  p-1">
                                <label htmlFor="country" className="block text-sm font-medium leading-6">State</label>
                                <div className="mt-2">
                                    <select id="country" name="country" onChange={handleChangeType} autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>Karnataka</option>
                                        <option >Delhi</option>
                                        <option >Kerala</option>
                                        <option>Manali</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3 p-1">
                                <label htmlFor="country" className="block text-sm font-medium leading-6">Country</label>
                                <div className="mt-2">
                                    <select id="country" name="country" onChange={handleChangeCountry} autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>India</option>
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full p-1">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6">Description</label>
                                <div className="mt-2">
                                    <textarea name="street-address" onChange={handleChangeDesc} id="street-address" maxLength={200} autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className='col-span-full  py-6'>
                                <button onClick={displayAll} className='text-black py-1 px-4 rounded-xl bg-[#f6d349]'>
                                    submit
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PlanNextTrip
