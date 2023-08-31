"use client";
import toFarsiNumber from "@/hooks/toPersion";
import {
  clculateTotal,
  clearAll,
  increase,
  remoeFromBasket,
  remove,
} from "@/redux/fetures/basket";
import { triggerDeleteBasket } from "@/redux/fetures/deleteBasketModule";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Payment = () => {
  const { basket, total, amount, totoalWhithoutDiscount } = useSelector(
    (state) => state.basket
  );
  useEffect(() => {
    dispatch(clculateTotal());
  }, [basket]);
  const dispatch = useDispatch();
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
    <div className="w-full h-screen flex justify-center items-center rounded-xl ">
      <div className="w-[80%] flex shadow-info">
        <div className="w-full pb-2 px-2 flex flex-col gap-2 bg-white border-r">
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
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="w-full py-2 flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="font-medium">
                مجموع سبد: {toFarsiNumber(total)} ریال
              </p>
              <p className="font-medium text-green-600">
                سود شما از این خرید: {toFarsiNumber(totoalWhithoutDiscount)}{" "}
                ریال
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="w-full font-bold text-right text-xl">درگاه پرداخت</p>
          <form className="w-full flex flex-col gap-2">
            <div className="w-full">
              <label>شماره کارت</label>
              <div className="w-full flex justify-between items-center">
                {[1, 2, 3, 4].map((item) => {
                  return (
                    <input
                      type={"number"}
                      className="w-[20%] border shadow-info rounded-md"
                    />
                  );
                })}
              </div>
            </div>
            <div className="w-full flex flex-col justify-start">
              <label className="font-bold text-sm">cvv2</label>
              <input
                type={"number"}
                className="w-[20%] border shadow-info rounded-md"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
