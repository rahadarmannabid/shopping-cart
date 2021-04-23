import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Country from './components/Country/Country'
import Cart from './components/Cart.js/Cart';

function App() {

  const  [countries,setCunties]=useState([]);
  const [cart,setCart]= useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
  .then(res=> res.json())
  .then(data => {
    setCunties(data);
    const names=data.map(country=>country.name)
    console.log(names)
  
  })

  

  .catch(error=>console.log(error))
  },[])

  const handleAddCountry=(country)=>{
    console.log('added',country)
    const newCart=[...cart, country ];
    setCart(newCart);
  };
  
  return (
    <div>
    <h1> Country loaded :{countries.length}</h1>
    <h1> Country added :{cart.length}</h1>
    <Cart cart={cart}></Cart>

     <ul>
       {
         countries.map(country=><Country handleAddCountry={handleAddCountry} country={country} key={country.alpha3code}></Country>)
         

       }
     </ul>
     </div>
  )
}

export default App;
