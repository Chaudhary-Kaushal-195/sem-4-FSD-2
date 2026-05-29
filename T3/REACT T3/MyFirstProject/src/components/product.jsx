
import './Product.css';

export default function Product(prop) {
  return (
    <div className="productContainer">
      <div className="productGrid">
        {prop.data.map((item) => (
          <div key={item.name} className="productCard">
            <img src={item.pic} alt={item.name} className="productImage" />
            <div className="productInfo">
              <h2 className="productName">{item.name}</h2>
              <p className="productPrice">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
