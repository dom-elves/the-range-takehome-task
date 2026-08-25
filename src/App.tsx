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
   * default selectedFilte to null
   * array of possible filters, looped over to create buttons
   */
  const [selectedFilter, setSelectedFilter] = useState(null);
  const filters = ['Price', 'Reviews', 'Name', 'Was Price'];

  /**
   * check response is okay, return data if so
   * set product constant from data
   * setLoadingProducts as false to emulate slower response
   * set error if caught, asll well as loading products to false
   */
 useEffect(() => {
    fetch('http://localhost:8000/api/products.php')
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

  /**
   * filters
   * price: standard a,b comparison
   * reviews: check if review is blank (false) so unreviewed products are at the end
   * name: use of localeCompare for string comparison
   * was_price: same as price, standard a,b comparison
   */
  const filteredProducts = [...products].sort((a, b) => {
    if (selectedFilter === 'Price') {
      return a.price - b.price;
    }

    if (selectedFilter === 'Reviews') {
      if (a.reviews === false) {
        return false
      } else {
        return a.reviews - b.reviews;
      }
    }

    if (selectedFilter === 'Name') {
      return a.name.localeCompare(b.name);
    }

    if (selectedFilter === 'Was Price') {
      return b.was_price - a.was_price;
    }

    return 0;
  });

  return (
    <>
      <h1 className="title">Office Essentials</h1>
      <div className="grid-container">
        {filters.map((filter) => (
          <button
            key={filter} 
            className="filter"
            onClick={() => {
              setSelectedFilter((currentFilter) =>
                currentFilter === filter ? null : filter
              );
            }}
            style={{
              background: selectedFilter == filter ? 'orange' : '',
              color: selectedFilter == filter ? 'white' : '',
            }}
          >
            Sort By {filter}
          </button>
        ))}
      </div>
      {loadingProducts && <p>Loading Products...</p>}
      {error && <p>Error loading products, please try again later.</p>}
      <div className="grid-container">
        {filteredProducts.map((product) => (
          <Product key={product.img} product={product}></Product>
        ))}
      </div>
    </>
  )
}

export default App
