import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchName.css';
import search from '../../assets/imgs/lupa.png';

const SearchName = ({ updateLocationInfo }) => {
  const [inputText, setInputText] = useState('');
  const [nombres, setNombres] = useState([]);
  const [sugerencias, setSugerencias] = useState([]);

  const buscarLocation = async () => {
    const url = 'https://rickandmortyapi.com/api/location';

    try {
      let nombres = [];

      let page = 1;
      let totalPages = 1;

      while (page <= totalPages) {
        const res = await axios.get(url, { params: { page } });
        const { results, info } = res.data;

        nombres = [...nombres, ...results.map((location) => location.name)];

        totalPages = info.pages;
        page++;
      }

      // console.log(nombres);

      setNombres(nombres);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputText(inputValue);

    const sugerenciasFiltradas = nombres.filter((nombre) =>
      nombre.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setSugerencias(sugerenciasFiltradas);
  };

  const handleSugerenciaClick = async (sugerencia) => {
    // console.log(sugerencia);
    setInputText(sugerencia);
    setSugerencias([]);
    try {
      const url = `https://rickandmortyapi.com/api/location/?name=${encodeURIComponent(
        sugerencia,
      )}`;
      const res = await axios.get(url);
      const resultados = res.data.results;
      updateLocationInfo(resultados);
    } catch (error) {
      console.log(error);
    }
    setInputText('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText) {
      handleSugerenciaClick(inputText);
      setInputText('');
    } else {
      alert('El campo está vacío');
    }
  };

  useEffect(() => {
    buscarLocation();
  }, []);
  return (
    <div className="search flex py-3 mx-autopy-3 mx-auto ">
      <form onSubmit={handleSubmit} className="w-full">
        <div className=" flex">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Escriba el nombre de una ubicación "
            className="text-black w-4/5 py-3 px-4 rounded-l-lg border-none outline-none"
            id="id_name"
          />
          <button
            type="submit"
            name="Search"
            className="bg-[#062226] px-3 py-3 rounded-r-lg uppercase justify-center hover:bg-[#04130a] hover:font-bold"
          >
            BUSCAR
            <img src={search} />
          </button>
        </div>
        <div className="sugerencias-container">
          <ul className="lista">
            {sugerencias.map((sugerencia) => (
              <li key={sugerencia} onClick={() => handleSugerenciaClick(sugerencia)}>
                {sugerencia}
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default SearchName;
