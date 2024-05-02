import React from 'react';

const PoinJudul = (props) => {
  return (
    <div>
      <h4 className='font-bold text-xl'>{props.subjudul}</h4>
      <p className='text-lg'>{props.title}</p>
    </div>
  );
};

export default PoinJudul;
