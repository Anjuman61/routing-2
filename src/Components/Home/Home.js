import React, { useEffect, useState }  from 'react';
import Countries from '../Countries/Countries';

const Home = () => {
    const [country,setCountry]=useState([])
    useEffect(() => {
      const url = 'https://restcountries.eu/rest/v2/all';
      fetch(url)
      .then(res=>res.json())
      .then(data=>setCountry(data))
    },[])
    return (
        <div style={{display: 'grid', gridTemplateColumns:'repeat(5,1fr'}}>
           {country.map(country=><Countries country={country}></Countries>)} 
        </div>
    );
};

export default Home;