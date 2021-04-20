import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [actor,setActor] =useState([])

  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setActor(data))


  } ,[])
  
  const nayoks=[{nam:'Shuvo' ,age:66},{nam:'Bappi', age:6}]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          actor.map(nayok=><Nayok name={nayok.name} Key={actor.id} age={nayok.age}></Nayok>)
        }

 

      </header>
    </div>
  );
}



function MovieCounter(){
  let [count,setCount] =useState(0)
  console.log(count, setCount)
  const handleClick=()=> setCount(count+1)
  
  return (
    
      <div>
      <button onClick={handleClick}> Click here</button>
      <h5>Number of Movie : {count}</h5>
      </div>
    
  )
}


function Nayok(props){
  console.log(props)
  const nayokStyle={
    backgroundColor: "grey",
    borderRadius:'5px',
    color:'blue',
    border: '2px solid green',
    padding: '20px'
  }
  return (
    <div style={nayokStyle}>
    <h1>
      Ami Nayok {props.name}
    </h1>
    <h1>
      Amr age {props.age}
    </h1>
    </div>
  )
}

export default App;
