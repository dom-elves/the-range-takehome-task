import { useState, useEffect } from 'react'
import './App.css'
import Product from './Product.tsx'

function App() {

  /**
   * products, array of product data
   * loadingProducts, boolean for displaying a loading dial for slow response times
   * error, for any errors that may exist
   */
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState(null);

  /**
   * useEffect react hook, 2nd param of empty array supposedly only make it run once
   * but still appears in console intermittently, not sure why
   */
 useEffect(() => {
    fetch('/api/product.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('error');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.product_arr);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoadingProducts(false));

  }, []);

  console.log(products);
  return (
    <>
      <h1 className="title">Office Essentials</h1>
      <div className="grid-container">
        <button className="grid-item filter">Sort By Price</button>
        <button className="grid-item filter">Sort By Review</button>
        <button className="grid-item filter">Sort By Name</button>
        <button className="grid-item filter">Sort By Saving</button>
      </div>
      <div className="grid-container">
        {products.map((product) => (
          <Product key={product.img} product={product}></Product>
        ))}
      </div>
    </>
  )
}

export default App
