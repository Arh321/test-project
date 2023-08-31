"use client";

import Card from "../card/Card";
import "./scrollBox.css";

const ScrollBox = ({ products }) => {
  if (!products) {
    return <div>Loading...</div>;
  }
  if (products) {
    return (
      <div className="w-4/5 px-2">
        <ul className="box">
          {products.map((product, index) => {
            return (
              <li key={`${product.productID} + ${index}`}>
                <Card
                  name={product.productName}
                  price={product.salePrice}
                  leftItem={product.mojodi}
                  discount={product.productID / 100}
                  id={product.productID}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default ScrollBox;
