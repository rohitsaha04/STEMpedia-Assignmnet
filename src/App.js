import React, {useState} from 'react';
import './App.css';
// import store from './store'; 

// store.subscribe(() => console.log(store.getState()));

function App() {

  const [ data, setData ] = useState('')

  function getinName(val){
    setData(val.target.value)
  }

  return (
    <div className="App">
      <h1>React Js STEMpedia Assignment</h1>
      <label htmlFor="GetInput">Name : </label>
      <input type="text" placeholder='Enter your name' id="GetInput" onChange={getinName} autoComplete="off"></input>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
