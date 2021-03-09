import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Countries = (props) => {
  const  {name,flag,region} = props.country;
  const history = useHistory();
  const handleClick = (name) =>{
      history.push(`/country/${name}`)

  }
  const countryStyle = {
      border: '1px solid goldenrod',
      margin:'10px',
      padding: '10px',
      backgroundColor: 'lightBlue',
   
  }
    return (
        <div style={countryStyle}>
            <img style={{width:'200px'}} src={flag} alt=""/>
            <h6>Country Name:{name}</h6>
            <p>Region:{region}</p>
            <Link to={`/country/${name}`}>About</Link>
            <br/>
            <Button onClick={()=>handleClick(name)}>View More</Button>
        </div>
    );
};

export default Countries;