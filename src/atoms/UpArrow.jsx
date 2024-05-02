import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";

const UpArrow = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Fungsi untuk menampilkan tombol saat discroll ke bawah
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Menambahkan event listener untuk mendeteksi peristiwa scroll
    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi untuk menggulir kembali ke atas halaman web
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Menggunakan smooth behavior untuk animasi gulir
    });
  };

  return (
    // Munculkan tombol hanya jika showButton adalah true
    <div>
      {showButton && (
        <button onClick={scrollToTop} className='bg-[#212121] border transition-all border-white p-3 cursor-pointer rounded-full fixed bottom-2 right-2'>
          <MdKeyboardArrowUp className='text-white text-2xl'/>
        </button>
      )}
    </div>
  );
}

export default UpArrow;
