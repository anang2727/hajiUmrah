import React from 'react'
import { FaWhatsapp , FaInstagram ,FaTelegram } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
        <div className='bg-[#212121] font-[poppins] md:px-32 py-5 px-3'>
            <div className='flex  justify-between'>
                <span className='text-white'>Jabbar</span>
                <div className='flex gap-5'>
                    <FaInstagram className='text-2xl text-white'></FaInstagram>
                    <FaWhatsapp className='text-2xl text-white'></FaWhatsapp>
                    <FaTelegram className='text-2xl text-white'></FaTelegram> 
                </div>
            </div>
            <hr className='my-5'/>
            <div className='flex flex-col justify-between text-white'>
                <span>Kebijakan Privasi</span>
                <span>Ketentuan</span>
                <span>copyrigth @ 2024 alJabbar </span>
            </div>
        </div>   
    </>
  )
}

export default Footer