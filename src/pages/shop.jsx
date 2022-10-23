import { useEffect } from "react";
import { useState } from "react";

function Shop() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      {products.length &&
        products.map((product, i) => {
          return (
            <div key={i}>
              <div>title = {product.title}</div>
              <div>price = {product.price}</div>
              <div>count = {product.count}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Shop;
