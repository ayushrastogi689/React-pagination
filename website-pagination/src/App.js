import React from "react";
import {useState, useEffect} from "react";
import './App.css';

function App() {

  // 6.
  // Now we have to keep all these products in some variable, so we will use a react hook useState 
  const [products, setProducts] = useState([]);

  // 1.
  // Here fetchProducts is an arrow function which is asynchronous in nature
  const fetchProducts = async() => {

    // 2.
    // We can use fetch() to get all the products from api.
       // After providing the URL in fetch() it becomes a asynchronous call, hence we need to provide await to resolve the promise 
    const response = await fetch("https://dummyjson.com/products?limit=100");
    
    // 3.
    // Converting the response into json format.
       // We put await to wait for the further operation  
    const data = await response.json();

    // 7. 
    // doing a check that data and data.products have values inside them then only setProducts
    if( data && data.products) {
      setProducts(data.products);
    }
    // 4. 
    console.log(data);
  };

  // 5. 
  useEffect(() => {
    fetchProducts()
  }, [])










  return (
    <div className="App">
      
    </div>
  );
}

export default App;
