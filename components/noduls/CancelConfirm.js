"use client";

import { clearAll } from "@/redux/fetures/basket";
import { triggerBasket } from "@/redux/fetures/basketModule";
import {
  triggerDeleteBasket,
  triggPruductKey,
} from "@/redux/fetures/deleteBasketModule";
import clsx from "clsx";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const CancelConfirm = ({ cancel, isConfirmOpen }) => {
  const dispatch = useDispatch();

  const onConfirm = () => {
    dispatch(clearAll());
    dispatch(triggerBasket());
    dispatch(triggPruductKey());
  };

  return (
    <div
      className={clsx(
        "w-full h-screen flex justify-center items-center fixed top-0 bg-red z-50",
        { "bg-main-hover": isConfirmOpen }
      )}
    >
      <div className="w-[300px] flex flex-col items-center gap-3 px-6 pt-4 pb-2 bg-white z-10">
        <div className="w-12 h-12 rounded-full border-4 border-red-500 text-red-500 text-2xl flex justify-center items-center">
          !
        </div>
        <p className="w-full text-center font-medium text-2xl">
          همه محصولات سبد خرید پاک خواهد شد
        </p>
        <p className="w-full text-center font-light text-base">
          آیا مطمئن هستید؟
        </p>
        <div className="w-full flex justify-center items-center gap-2">
          <Link href={"/"}>
            <button
              onClick={() => onConfirm()}
              className="w-[72px] py-2 bg-blue-600 text-center font-light text-white text-[0.6rem]"
            >
              تایید
            </button>
          </Link>
          <button
            onClick={(e) => cancel(e)}
            className="w-[80px] py-[8px] bg-red-600 text-center font-light text-white text-[0.6rem]"
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelConfirm;
