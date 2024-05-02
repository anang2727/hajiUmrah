import React from 'react';
import img5 from '../img/img5.png';
import PoinJudul from '../atoms/poinJudul';
import { TbChecklist } from "react-icons/tb"; 
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';


const Keunggulan = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);

  return (
    <>
      <div className='md:flex justify-center items-center h-screen font-[poppins] px-5'>
        <img src={img5} alt="" className='w-56 md:w-96 mx-auto md:mx-0' data-aos="fade-right"/>
        <div>
          <h2 className='font-bold text-3xl' data-aos="fade-in">Keunggulan</h2>
          <div className='my-5' data-aos="fade-left">
            {/* Poin  */}
            <div className='my-2 flex gap-2 items-start'>
                <TbChecklist className='text-3xl'/> 
              <div>
                <PoinJudul subjudul="Nyaman & Aman" title="Rasakan ketenangan ibadah bersama jabbar"></PoinJudul>
              </div>
            </div>
            <div className='my-2 flex gap-2 items-start'>
                <TbChecklist className='text-3xl'/> 
              <div>
                <PoinJudul subjudul="Pembimbing Ahli" title="Dapatkan bimbingan terbaik dari tim jabbar yang berpengalaman"></PoinJudul>
              </div>
            </div>
            <div className='my-2 flex gap-2 items-start'> 
                <TbChecklist className='text-3xl'/> 
              <div>
                <PoinJudul subjudul="Pengalaman tak Terlupakan" title="Ciptakan momen spiritual yang berkesan bersama jabbar"></PoinJudul>
              </div>
            </div>
            <div className='my-2 flex gap-2 items-start'>
                <TbChecklist className='text-3xl'/> 
              <div>
                <PoinJudul subjudul="Bebas Khawatir" title="Jalani Ibadah dengan tenang Bersama Jabbar"></PoinJudul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keunggulan;