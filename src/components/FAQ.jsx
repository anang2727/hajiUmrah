import React from 'react'
import AccordionFaq from '../atoms/AccordionFaq'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
const FAQ = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);

  return (
    <>
    <div className='md:flex justify-center items-center h-screen font-[poppins] px-5 flex-col py-5'>
        <h1 className='text-[#212121] md:text-4xl text-2xl font-bold md:font-extrabold text-center mb-5' data-aos="fade-up">Temukan Atas Jawaban Pertanyaan Anda <br />Tentang Haji & Umrah Di Jabbar</h1>
            <AccordionFaq Header="Pertanyaan 1" Title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque iusto corrupti quas a odit dignissimos debitis adipisci, possimus nisi."/>
            <AccordionFaq Header="Pertanyaan 2" Title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque iusto corrupti quas a odit dignissimos debitis adipisci, possimus nisi."/>
            <AccordionFaq Header="Pertanyaan 3" Title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque iusto corrupti quas a odit dignissimos debitis adipisci, possimus nisi."/>
            <AccordionFaq Header="Pertanyaan 4" Title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque iusto corrupti quas a odit dignissimos debitis adipisci, possimus nisi."/>
    </div>
    
    </>
  )
}

export default FAQ