import React, { useState } from 'react';
import ResidentInfo from '../ResidentInfo/ResidentInfo';

const ResidentList = ({ residents }) => {
  return (
    <section className="flex flex-col border border-t-4 border-[#062226] rounded-b-lg mb-7">
      <h3 className="py-4 pl-5 text-2xl uppercase font-semibold">Habitantes</h3>
      <div className="flex flex-wrap flex-row gap-5 justify-center max-[1270px]:justify-evenly">
        {residents.map((residents) => (
          <ResidentInfo key={residents} urlResidents={residents}></ResidentInfo>
        ))}
      </div>
    </section>
  );
};

export default ResidentList;
