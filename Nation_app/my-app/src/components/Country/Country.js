import React from 'react';

const Country = (props) => {
    const {name,population, region,flag} = props.country;
    const countryStyle={textAlign: 'center' ,border: '1px solid red',margin:'10px',padding:'10px'}
    const handleAddCountry=props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>{name}</h4>
            <h4>{population}</h4>
            <h4>{region}</h4>
            <img style={{height:'50px'}} src={flag} alt=""/>
            <br/>
            <button onClick={()=> handleAddCountry(props.country)}> Add Country</button>
        </div>
    );
};

export default Country;