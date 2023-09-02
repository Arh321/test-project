"use client";

import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import Card from "../card/Card";
import "./scrollBox.css";

const ScrollBox = ({ products }) => {
  let scrl = useRef(null);
  const [scrolEnd, setscrolEnd] = useState(false);
  const [scrolStart, setScrolStart] = useState(true);
  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
  };
  const scrollCheck = () => {
    let newScrollLeft = scrl.current.scrollLeft;
    if (
      -(scrl.current.scrollWidth - scrl.current.clientWidth) >
      newScrollLeft - 4
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
    if (newScrollLeft >= -1) {
      setScrolStart(true);
    } else {
      setScrolStart(false);
    }
  };
  if (!products) {
    return <div>Loading...</div>;
  }
  if (products) {
    return (
      <div className="w-4/5 px-2 relative">
        <div
          className={
            "absolute justify-center  left-2 z-10 flex items-center bg-main-snow w-[28px] h-[28px] rounded-full top-1/2"
          }
        >
          <button
            onClick={() => slide(-150)}
            className="bg-white  flex justify-center items-center w-full h-full rounded-full shadow-info focus:outline-none"
          >
            <Icon
              icon="grommet-icons:next"
              color="black"
              width="14"
              height="14"
              hFlip={true}
            />
          </button>
        </div>
        <ul ref={scrl} onScroll={scrollCheck} className="box">
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
        <div
          className={
            "absolute justify-center   top-1/2 right-2 z-10 flex items-center bg-main-snow rounded-full w-[28px] h-[28px]"
          }
        >
          <button
            onClick={() => slide(150)}
            className="bg-white  flex justify-center items-center w-full h-full rounded-full shadow-info focus:outline-none"
          >
            <Icon
              icon="grommet-icons:next"
              color="black"
              width="14"
              height="14"
            />
          </button>
        </div>
      </div>
    );
  }
};

export default ScrollBox;
