import React from 'react';
import none from '../../assets/imgs/none.webp';
import './None.css';

export default function None() {
  return (
    <div className=" w-[85%] mb-10 h-screen border-t-4 border-[#d1dcdd] rounded-b-lg">
      <h3 className="text-center text-4xl uppercase my-6 max-[530px]:text-2xl">
        No exixten habitantes{' '}
      </h3>
      <div className="cont_img rounded-full overflow-hidden mx-auto">
        <img src={none} alt="none" className="img  w-full h-full object-cover " />
      </div>
    </div>
  );
}
