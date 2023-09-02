"use client";
import { clculateTotal } from "@/redux/fetures/basket";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../icons/Icon";
import CheckModule from "../module/CheckModule";
import Basket from "./Basket";
import Login from "./Lgin";
import Search from "./Search";
import { triggerBasket } from "@/redux/fetures/basketModule";

const Header = ({ productGroups }) => {
  const isBsketOpen = useSelector((state) => state.basketModule.isBsketOpen);
  const dispatch = useDispatch();
  const triggerModule = () => {
    dispatch(triggerBasket());
    dispatch(clculateTotal());
  };
  return (
    <div className="w-full py-4 flex items-center justify-between sticky top-0 bg-white z-30">
      <div className="w-1/2 flex items-center gap-2">
        <p className="flex flex-col gap-1">
          <span className="font-bold text-2xl">پانیذ</span>
          <span className="font-medium text-[0.5rem]">هایپر مارکت آنلاین</span>
        </p>
        <Search productGroups={productGroups} />
      </div>
      <div className="flex items-center gap-2">
        <Login />
        <Basket triggerModule={triggerModule} />
      </div>
      {isBsketOpen && <CheckModule isBsketOpen={isBsketOpen} />}
    </div>
  );
};
export default Header;
