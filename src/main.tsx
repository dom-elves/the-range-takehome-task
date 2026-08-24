import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Product from './Product.tsx'

// make request

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className="title">Office Essentials</h1>
    <div className="filter-container">
      <button className="filter">Sort By Price</button>
      <button className="filter">Sort By Review</button>
      <button className="filter">Sort By Name</button>
      <button className="filter">Sort By Saving</button>
    </div>
    <Product></Product>
  </StrictMode>,
)
