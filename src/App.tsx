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
   * check response is okay, return data if so
   * set product constant from data
   * setLoadingProducts as false to emulate slower response
   * set error if caught, asll well as loading products to false
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
        setTimeout(() => {
          setProducts(data.product_arr);
          setLoadingProducts(false);
        }, 1000);
      })
      .catch((error) => {
        setError(error);
        setLoadingProducts(false);
      });

  }, []);

  return (
    <>
      <h1 className="title">Office Essentials</h1>
      <div className="grid-container">
        <button className="grid-item filter">Sort By Price</button>
        <button className="grid-item filter">Sort By Review</button>
        <button className="grid-item filter">Sort By Name</button>
        <button className="grid-item filter">Sort By Saving</button>
      </div>
      {loadingProducts && <p>Loading Products...</p>}
      {error && <p>Error loading products, please try again later.</p>}
      <div className="grid-container">
        {products.map((product) => (
          <Product key={product.img} product={product}></Product>
        ))}
      </div>
    </>
  )
}

export default App
