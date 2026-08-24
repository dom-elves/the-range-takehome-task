import { useState } from 'react'
import './App.css'
import Product from './Product.tsx'

function App() {

  return (
    <>
      <h1 className="title">Office Essentials</h1>
      <div className="filter-container">
        <button className="filter">Sort By Price</button>
        <button className="filter">Sort By Review</button>
        <button className="filter">Sort By Name</button>
        <button className="filter">Sort By Saving</button>
      </div>
      <Product></Product>
    </>
  )
}

export default App
