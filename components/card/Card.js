"use client";

import toFarsiNumber from "@/hooks/toPersion";
import {
  addToBaket,
  clculateTotal,
  increase,
  remoeFromBasket,
  remove,
} from "@/redux/fetures/basket";
import { triggerDeleteBasket } from "@/redux/fetures/deleteBasketModule";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ id, name, price, discount, leftItem }) => {
  const isPruductKey = useSelector(
    (state) => state.deleteBasketModule.isPruductKey
  );
  const [isFirstClick, setIsFirstClick] = useState(isPruductKey || false);
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  useEffect(() => {
    if (isFirstClick) {
      setIsFirstClick(!isFirstClick);
    }
  }, [isPruductKey]);
  const addItem = (id, name, price, discount) => {
    dispatch(
      addToBaket({
        id: id,
        price: price,
        name: name,
        discount: discount,
        amount: 1,
      })
    );
    dispatch(clculateTotal());
    setIsFirstClick(!isFirstClick);
  };
  const checkProduct = basket.find((item) => item.id == id);
  const onMines = (id, amount) => {
    if (checkProduct.amount < 2) {
      dispatch(remove(id));
      setIsFirstClick(!isFirstClick);
    } else {
      dispatch(remoeFromBasket(id));
    }
    dispatch(clculateTotal());
  };
  const onAdd = (id) => {
    dispatch(increase(id));
    dispatch(clculateTotal());
  };

  return (
    <div className="flex flex-col w-[240px] bg-white rounded-xl px-5 pb-4 shadow-box">
      <div className="w-full py-4 flex items-center justify-center">
        <img
          className=" aspect-2/3 bg-white shadow-info"
          src="https://measomarket.com/uploads/products_images/164873-185x226.jpg"
        />
      </div>

      <p className="w-full font-bold text-sm truncate pr-4">{name}</p>
      <p className="w-full font-medium text-[0.7rem] pr-4 mt-2">
        {discount ? toFarsiNumber(price - (price * discount) / 100) : price}{" "}
        <span className="text-gray-400">تومان</span>
      </p>

      <div
        className={clsx("w-full flex items-center mt-2", {
          "justify-between": discount,
        })}
      >
        {discount && (
          <div className="flex items-center gap-1">
            <div className="w-[36px] h-[36px] rounded-[15px] flex justify-center items-center bg-main-discount-new text-[0.6rem] px-2 text-gray-200 font-bold shadow-info">
              %{toFarsiNumber(discount)}
            </div>
            <p className="w-full font-medium text-gray-400 drop-shadow-md line-through text-[0.6rem]">
              {toFarsiNumber(price)}
            </p>
          </div>
        )}
        <div className="flex justify-end">
          {!isFirstClick ? (
            <button
              onClick={() => addItem(id, name, price, discount)}
              className="w-[96px] py-2 px-1 rounded-2xl border border-gray-300 shadow-info font-medium text-[0.6rem]"
            >
              افزودن به سبد خرید
            </button>
          ) : (
            <div className="flex items-center gap-4 border rounded-lg border-blue-500 px-1">
              <button onClick={() => onAdd(id)} className="text-3xl">
                +
              </button>
              <p>{checkProduct?.amount ? checkProduct.amount : ""}</p>
              <button onClick={() => onMines(id)} className="text-3xl">
                -
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
