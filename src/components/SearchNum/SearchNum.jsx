import React, { useState } from 'react';
// import { getRandonNumber } from '../../utils/getRandonNumber';
// import axios from 'axios';

const SearchNum = ({ loadLocationInfo }) => {
  const [idLocationValue, setIdLocationValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idLocationValue) {
      if (isNumberInRange(idLocationValue, 1, 126)) {
        loadLocationInfo(idLocationValue);
        console.log(idLocationValue);
        var input = document.getElementById('id_location');
        input.value = '';
      } else {
        alert('El valor ingresado debe ser un número entre 1 y 126');
      }
    } else {
      alert('El campo está vacío');
    }
  };

  function isNumberInRange(value, min, max) {
    return !isNaN(value) && parseInt(value) >= min && parseInt(value) <= max;
  }

  const idLocationHandeleChange = (e) => {
    const newValue = e.target.value;
    if (/^\d{0,3}$/.test(newValue)) setIdLocationValue(newValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="text"
          name="id_location"
          value={idLocationValue}
          onChange={idLocationHandeleChange}
        />
        <input type="submit" name="Search" />
      </form>
    </div>
  );
};

export default SearchNum;
