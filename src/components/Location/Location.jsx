import React from 'react';
import './Location.css';

const Location = ({ locationInfo }) => {
  return (
    <section className=" bg-[#0d3940] rounded-t-lg mt-4 py-4 flex flex-col">
      <h2 className="text-center text-[#7fff00] font-extrabold text-3xl mb-3 font-['rick and morty']">
        {locationInfo.name}
      </h2>
      <ul className="flex justify-evenly text-lg max-[510px]:flex-col max-[510px]:ml-3">
        <li>
          <span className="text-[#80bf40] font-extrabold">Tipo: </span>{' '}
          {locationInfo.type}
        </li>
        <li>
          <span className="text-[#80bf40] font-extrabold">Dimensión: </span>{' '}
          {locationInfo.dimension}
        </li>
        <li>
          <span className="text-[#80bf40] font-extrabold">Población: </span>{' '}
          {locationInfo.residents.length}
        </li>
      </ul>
    </section>
  );
};

export default Location;
