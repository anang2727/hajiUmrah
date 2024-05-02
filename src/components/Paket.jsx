import React from 'react';
import CardPaket from '../atoms/CardPaket';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Paket = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div className='md:h-screen py-5 bg-[#212121] font-[poppins] flex items-center justify-center px-1'>
      <div className='max-w-screen-xl mx-auto'>
        <h1 className='text-white md:text-5xl text-2xl font-bold md:font-extrabold text-center' data-aos="fade-in">Temukan Paket Haji & Umrah <br /> Impian Anda Di Jabbar</h1>
        <p className='my-5 text-center md:text-xl text-sm text-white' data-aos="fade-in">"Pilih paket yang sesuai dengan keinginan anda dan <br />rasakan pengalaman spiritual yang tak terlupakan bersama bersama Jabbar"</p>
            
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center' data-aos="fade-up" >
          <CardPaket
            SubJudul="Umrah Istimewa"
            Lama="(10 Hari)"
            Rupiah="Rp.30.000.000"
            title1="Penerbangan"
            title2="Akomodasi"
            title3="Transportasi Lokal"
            title4="Pembimbing"
            title5="Makan"
            title6="Air Zam-Zam"
          />
          <CardPaket
            SubJudul="Haji Plus"
            Lama="(42 Hari)"
            Rupiah="Rp.80.000.000"
            title1="Penerbangan"
            title2="Akomodasi"
            title3="Transportasi Lokal"
            title4="Pembimbing"
            title5="Makan"
            title6="Air Zam-Zam"
            title7="Tour Mekkah & Madinah"
          />
          <CardPaket
            SubJudul="Haji Reguler"
            Lama="(40 Hari)"
            Rupiah="Rp.60.000.000"
            title1="Penerbangan"
            title2="Akomodasi"
            title3="Transportasi Lokal"
            title4="Pembimbing"
            title5="Makan"
            title6="Air Zam-Zam"

          />
        </div>
      </div>
    </div>
  )
}

export default Paket;
