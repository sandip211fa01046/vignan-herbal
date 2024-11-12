import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaT } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className={"flex flex-col  gap-2 mt-5 border border-t-gray-500"}>
            <div className={"flex flex-col lg:flex-row items-center justify-between p-8"}>

                <div>
                    <img src="/src/assets/vignan.svg" alt='vignan herbal garden' width={200}
                        height={180}></img>
                    <h1 className={"text-green-800  my-2 font-bold text-lg md:text-3xl tracking-wider "}>Vignan's Herbal Garden</h1>
                    <img src='/src/assets/herbal.png' alt='herbal garden' width={150}
                        height={100}></img>
                </div>
                <div>
                    <h1 className={"text-lg text-center font-semibold text-green-700 "}>CONTACT US AT</h1>
                    <div className={"flex items-center gap-2 mt-3 mx-2"}>
                    <FaFacebookSquare size={35}/>
                    <FaInstagram size={35}/>
                    <BsTwitterX size={35}/>
                    <FaYoutube size={35}/>
                    </div>
                </div>
                <div>
                    <h1 className={"text-lg text-center font-semibold text-green-700 "}>ADDRESS</h1>
                    <div className={"flex-col items-center justify-center "}>
                        <p>Vignan's Foundation for Science, Technology and Research</p>
                        <p>(Deemed to be University), Vadlamudi, Guntur-522213</p>
                        <div className={"flex items-center justify-between my-1 mt-3"}>
                            <p>info@vignan.ac.in</p>
                            <p>0863-2344700 / 701</p>

                        </div>
                    </div>
                </div>



            </div>
            <p className={"text-center"}>Copyrights © 2024 VFSTR. All rights reserved.</p>
        </div>

    )
}

export default Footer