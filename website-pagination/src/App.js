import React from "react";
import {useState, useEffect} from "react";
import './App.css';

function App() {
  // Here fetchProduct is an arrow function which is asynchronous in nature
  const fetchProduct = async() => {

    const [product, setProduct] = useState([]);

    // We can use fetch() to get all the products from api.
       // After providing the URL in fetch() it becomes a asynchronous call, hence we need to provide await to resolve the promise 
    const response = await fetch("https://dummyjson.com/products?limit=100");
    
    // Converting the response into json format.
       // We put await to wait for the further operation  
    const data = await response.json();
    

  }










  return (
    <div className="App">
      
    </div>
  );
}

export default App;
