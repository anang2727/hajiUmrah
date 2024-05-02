import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const CardPaket = (props) => {
  const { SubJudul, Lama, Rupiah,...otherTitles } = props;

  return (
    <div>
      <div className='flex justify-between mt-10'>
        <div className='bg-white p-5 rounded-sm'>
          <div className='text-center mb-3'>
            <h4 className='font-bold text-xl'>{SubJudul}</h4>
            <span>{Lama}</span>
            <hr className='my-3'/>
            <p className='font-bold'>{Rupiah}</p>
          </div>
          {/* Menampilkan semua judul tambahan secara dinamis */}
          {Object.entries(otherTitles).map(([key, value]) => (
            <div key={key} className='flex gap-1 items-center'>
              <FaCheckCircle />
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardPaket;
