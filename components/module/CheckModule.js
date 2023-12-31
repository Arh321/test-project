"use client";
import toFarsiNumber from "@/hooks/toPersion";
import {
  clculateTotal,
  clearAll,
  increase,
  remoeFromBasket,
  remove,
} from "@/redux/fetures/basket";
import { closingBasket, triggerBasket } from "@/redux/fetures/basketModule";
import { triggerDeleteBasket } from "@/redux/fetures/deleteBasketModule";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const CheckModule = ({ isBsketOpen }) => {
  const { basket, total, amount, totoalWhithoutDiscount } = useSelector(
    (state) => state.basket
  );

  const dispatch = useDispatch();
  const ref = useRef(null);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isBsketOpen && ref.current && !ref.current.contains(e.target)) {
        dispatch(closingBasket(false));
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isBsketOpen]);
  useEffect(() => {
    dispatch(clculateTotal());
  }, [basket]);
  const onMines = (id, amount) => {
    if (amount < 2) {
      dispatch(remove(id));
    } else {
      dispatch(remoeFromBasket(id));
    }
  };
  const onCleareAll = () => {
    dispatch(triggerDeleteBasket());
  };
  return (
    <div
      ref={ref}
      className="w-[400px] pb-2 px-2 flex flex-col gap-2 absolute top-[80%] left-5 bg-white rounded-xl shadow-info z-10"
    >
      <div className="w-full flex justify-end my-1 ">
        <button
          onClick={() => onCleareAll()}
          className="border-2 rounded-lg p-1 font-medium text-xs"
        >
          حذف همه
        </button>
      </div>
      <div className="w-full flex items-center justify-between my-1">
        <p className="font-medium text-xs">{toFarsiNumber(amount)} کالا</p>
        <button className="font-medium text-xs text-main-blue">
          مشاهده سبد خرید {">"}
        </button>
      </div>
      <div className="w-full flex flex-col gap-2">
        {basket.length > 0 &&
          basket.map((item) => {
            return (
              <div
                key={item.id}
                className="w-full flex flex-col gap-1 border-b pb-1"
              >
                <p className="w-full font-medium text-base flex items-center justify-between">
                  {item.name}
                  <span>
                    {toFarsiNumber(
                      item.price - (item.price * item.discount) / 100
                    )}{" "}
                    ریال
                  </span>
                </p>
                <div className="w-full flex justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-[36px] h-[36px] rounded-[15px] flex justify-center items-center bg-main-discount-new text-[0.6rem] px-2 text-gray-200 font-bold shadow-info">
                      %{toFarsiNumber(item.discount)}
                    </div>
                    <p className="w-full font-medium text-gray-400 drop-shadow-md line-through text-[0.6rem]">
                      {toFarsiNumber(item.price)}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border rounded-lg border-blue-500 px-1">
                    <button
                      onClick={() => dispatch(increase(item.id))}
                      className="text-3xl"
                    >
                      +
                    </button>
                    <p>{item.amount}</p>
                    <button
                      onClick={() => onMines(item.id, item.amount)}
                      className="text-3xl"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="w-full py-2 flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="font-medium">مجموع سبد: {toFarsiNumber(total)} ریال</p>
          <p className="font-medium text-green-600">
            سود شما از این خرید: {toFarsiNumber(totoalWhithoutDiscount)} ریال
          </p>
        </div>
        <div className="flex items-center gap-2 px-2">
          <Link href={"/payment"}>
            <button className="bg-main-blue rounded-lg p-2 text-white font-medium">
              پرداخت
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckModule;
