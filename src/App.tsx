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
   * filter down data as specified
   * set error if caught
   * setLoadingProducts to false when finished
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
        const filtered = data.product_arr.filter((product) => 
            product.was_price && product.reviews);
        setProducts(filtered);
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
