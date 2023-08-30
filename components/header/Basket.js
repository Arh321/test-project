"use client";

import { useSelector } from "react-redux";

const Basket = ({ triggerModule }) => {
  const { basket, amount } = useSelector((state) => state.basket);
  console.log(basket);
  return (
    <div
      onClick={() => triggerModule()}
      className="flex items-center gap-3 border-2 border-gray-300 px-2 py-[6px] rounded-[13px] relative"
    >
      <img className="absolute right-1 top-2" src="/icons/basket.svg" />
      <p className="font-medium text-[0.7rem] flex gap-2 items-center pr-7">
        سبد خرید
      </p>
      <div className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center font-bold text-[0.7rem]">
        {amount}
      </div>
    </div>
  );
};
export default Basket;
