import './Product.css'

function Product({product}) {

    console.log('test');
    return (
        <div className="grid-item product-card">
            <img src={`/product-images/${product.img}.jpg`} />
            <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">£{product.price}</p>
                <p className="product-was-price">
                    Was <span>£{product.was_price}</span>
                </p>
                <p className="product-reviews">{product.reviews}% Review Score</p>
                <button className="basket-button">Add To Basket</button>
            </div>
        </div>
    )
}

export default Product
