import React from 'react'
import insta from "../assets/insta.png";
import github1 from "../assets/gitHub.png";
import linkdin from "../assets/linkdin.png";
import twitter from "../assets/twitter.png";
const SocialMedia = () => {
    return (
        <div className=' flex justify-center items-center w-[autorem] h-auto '>
            <ul className={`flex gap-3`}>
                <li className="p-2 border-2 rounded-full border-slate-400 bg-slate-200 transition duration-150 ease-in-out hover:-translate-y-2">
                    <a href="https://github.com/Charan-bavaji"><img src={github1} alt="github" width={30} height={30} /></a>
                </li>
                <li className="p-2 border-2 rounded-full border-slate-400 bg-slate-200 transition duration-150 ease-in-out hover:-translate-y-2">
                    <a href="https://www.linkedin.com/in/charan-r-884217221/">
                        <img src={linkdin} alt="linkdin" width={30} height={30} />
                    </a>
                </li>
                <li className="p-2 border-2 rounded-full border-slate-400 bg-slate-200 transition duration-150 ease-in-out hover:-translate-y-2">
                    <a href="https://twitter.com/CharanBavaji07">
                        <img src={twitter} alt="X" width={30} height={30} />
                    </a>
                </li>
                <li className="p-2 border-2 rounded-full border-slate-400 bg-slate-200 transition duration-150 ease-in-out hover:-translate-y-2">
                    <a href="https://www.instagram.com/code_201/">
                        <img src={insta} alt="insta" width={30} height={30} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia
