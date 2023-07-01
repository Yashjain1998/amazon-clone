// import logo from './logo.svg';
// import './App.css';
import "./styrel.css"

import { useEffect, useState } from "react";


function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
    const[value,setvalue]=useState();
    useEffect(()=>{
      fetch("https://fakestoreapi.com/products/").then(el=>el.json()).then(el=>setvalue(el));
    },[]);
    console.log(value);
    return(<> 
      <div className="flex">
        <input/>
        <select>
       
          {
            value&&value.map(({category,id})=>{
              return(<option key={id}>{category}</option>)
            })
          }
        </select>
      </div>
      <div className="grid">         
      {
        value&&value.map(({image,description,rating,title})=>{
          return( <div><img src={image} alt="it image"/>
            <h1>{title}
            <span><h2>rating</h2><h2>{rating.rate}</h2></span>
            </h1>
            <p>{description}</p>
            
          </div>)
        })
      }
    </div>
    </>);
   
}

export default App;
