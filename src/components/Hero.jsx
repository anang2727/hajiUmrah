import React from 'react';
import img1 from '../../src/img/img1.png';
import img2 from '../../src/img/img2.png';
import img3 from '../../src/img/img3.png';
import img4 from '../../src/img/img4.png';
import 'animate.css/animate.min.css';

const Hero = () => {
  return (
    <div className='bg-[#212121] font-[poppins] flex items-center justify-center h-screen'>
      <div className='md:flex gap-20'>
        <div className='my-5 animate__animated animate__fadeInLeft'>
          <h1 className='text-white md:font-extrabold md:text-6xl font-bold text-2xl'>Wujudkan Impian</h1>
          <h1 className='text-white md:font-extrabold md:text-6xl font-bold text-2xl md:my-5 my-2'>Haji & Umrah Anda</h1>
          <h1 className='text-white md:font-extrabold md:text-6xl font-bold text-2xl'>Bersama Jabbar</h1>
          <p className='text-white md:text-xl text-sm mt-2'>Pembimbing Berpengalaman dan Bersetifikat</p>
          <p className='text-white md:text-xl text-sm mt-2'>Memandu Anda Dengan Penuh Dedikasi</p>
          <button className='md:px-3 md:py-2 px-2 py-1 bg-white mt-2 rounded-sm font-bold md:text-xl'>Dapatkan Paket</button>
        </div>
        <div className='flex gap-5 animate__animated animate__fadeInRight'>
          <div className='relative'>
            <img src={img1} alt='Gambar kiri atas' className='md:w-44 w-32'/>
            <img src={img4} alt='' className='rounded-xl mt-5 absolute right-0 w-16 md:w-28'/>
          </div>
          <div>
            <img src={img3} alt='Gambar kiri bawah' className='rounded-xl md:w-28 w-16'/>
                       <img src={img2} alt='Gambar kanan bawah' className='md:w-44 w-32 mt-5' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
