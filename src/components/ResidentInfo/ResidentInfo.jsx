import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResidenteInfo.css';

const ResidentInfo = ({ urlResidents }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const loadResident = async () => {
    try {
      const res = await axios.get(urlResidents);
      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const status = residentInfo.status;
  // let className;

  let status = '';
  let className = 'default';

  if (residentInfo && residentInfo.status) {
    status = residentInfo.status;
    if (status === 'Dead') {
      className = 'red';
    } else if (status === 'Alive') {
      className = 'green';
    } else {
      className = 'black';
    }
  }

  useEffect(() => {
    loadResident();
  }, []);
  return (
    <div className=" mb-4 max-[1290px]:px-0">
      {residentInfo && (
        <div className=" contenedor">
          <div className="card">
            <img src={residentInfo.image} alt={residentInfo.name}></img>
            <div className="status">
              <span className={className}>{status}</span>
            </div>
            <div className="card__content">
              <h3 className="card__title">{residentInfo.name}</h3>

              <ul className="card__description">
                <li>
                  <span>Raza: </span>
                  {residentInfo.species}
                </li>
                <li>
                  <span>Origen: </span>
                  {residentInfo.origin.name}
                </li>
                <li>
                  <span>Apariciónes en episodios: </span>
                  {residentInfo.episode.length}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResidentInfo;
