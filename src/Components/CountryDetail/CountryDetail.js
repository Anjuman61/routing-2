import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const CountryDetail = () => {
     const {countryName} = useParams();
     const [countryDetail, setCountryDetail] = useState({});
     useEffect(() => {
         const url = `https://restcountries.eu/rest/v2/name/${countryName}`
         fetch(url)
         .then(res=>res.json())
         .then(data=>setCountryDetail(data[0])
         )
     },[])
     console.log(countryDetail)
    return (
        <div>
            {/* <h1>this is for detail:{countryName}</h1> */}
            <img style={{width:'300px'}} src={countryDetail.flag} alt=""/>
            <h6>Country Name:{countryDetail.name}</h6>
            <p>Region:{countryDetail.region}</p>
            <p>Populations:{countryDetail.population}</p>
            <p>Time Zone:{countryDetail.timezones}</p>


            {/* <h6>Country Name:{countryDetail && countryDetail.name}</h6> */}
           
        </div>
    );
};

export default CountryDetail;