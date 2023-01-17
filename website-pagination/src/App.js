import React from "react";
import {useState, useEffect} from "react";
import './App.css';

function App() {
  // Here fetchProduct is an arrow function which is asynchronous in nature
  const fetchProduct = async() => {

    const [product, setProduct] = useState([]);

    // After providing the URL this becomes a asynchronous call, hence we need to provide await
    const response = await fetch("https://dummyjson.com/products?limit=100");

  }










  return (
    <div className="App">
      
    </div>
  );
}

export default App;
