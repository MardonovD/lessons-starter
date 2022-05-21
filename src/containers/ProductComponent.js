import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  const renderList = products.map((product) => {
    const { id, title, price, image, category } = product;
    return (
      <div
        className="four column wide"
        style={{ width: "250px", height: "400px" }}
        key={id}
      >
        <Link to={`/product/${id}`}>
          <div
            className="ui link cards "
            style={{ width: "250px", height: "400px" }}
          >
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header"></div>
                <div className="meta price">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
