import { useEffect } from "react";
import { useState } from "react";

function Shop() {
  const [products, setProduct] = useState([
    {
      title: "sausage",
      price: 390.99,
      count: 3,
    },
  ]);

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
      {products &&
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
