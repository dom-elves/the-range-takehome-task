import './Product.css'

function Product({product}) {

    /**
     * format currency values for display
     */
    const formatCurrency = (amount: number) => (amount / 100).toFixed(2);

    const formattedPrice = formatCurrency(product.price);
    const formattedWasPrice = formatCurrency(product.was_price);

    return (
        <div className="grid-item product-card">
            <img src={`/product-images/${product.img}.jpg`} />
            <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">£{formattedPrice}</p>
                <p 
                    className="product-was-price" 
                    style={{ visibility: formattedWasPrice > 0 ? 'visible' : 'hidden' }}
                >
                    Was <span>£{formattedWasPrice}</span>
                </p>
                <p 
                    className="product-reviews" 
                    style={{ visibility: product.reviews ? 'visible' : 'hidden' }}
                >
                    {product.reviews}% Review Score
                </p>
                <button className="basket-button">Add To Basket</button>
            </div>
        </div>
    )
}

export default Product
