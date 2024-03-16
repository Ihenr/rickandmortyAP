import axios from 'axios';
import react, { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Location from './components/Location/Location';
import None from './components/None/None';
import ResidentList from './components/ResidentList/ResidentList';
import SearchName from './components/SearchName/SearchName';
// import SearchNum from './components/SearchNum/SearchNum';
import { getRandonNumber } from './utils/getRandonNumber';

function App() {
  const [locationInfo, setLocationInfo] = useState(null);

  const getIdLocationRandon = () => getRandonNumber(1, 126);

  const loadLocationInfo = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    try {
      const res = await axios.get(url);
      // console.log(res.data);
      setLocationInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateLocationInfo = (info) => {
    setLocationInfo(info[0]);
  };

  useEffect(() => {
    loadLocationInfo(getIdLocationRandon());
  }, []);

  return (
    <div className="bg-[#05292e] min-h-screen flex flex-col text-white overflow-hidden">
      <Header></Header>
      <h1>LUGARES DE RICK Y MORTY</h1>
      <SearchName updateLocationInfo={updateLocationInfo}></SearchName>
      {/* <SearchNum loadLocationInfo={loadLocationInfo}></SearchNum> */}
      <div className=" flex flex-col items-center justify-center">
        {locationInfo && <Location locationInfo={locationInfo}></Location>}
        {locationInfo && locationInfo.residents.length !== 0 && locationInfo !== null ? (
          locationInfo && <ResidentList residents={locationInfo.residents}></ResidentList>
        ) : (
          <None></None>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
