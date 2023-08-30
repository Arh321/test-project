"use client";
import { clculateTotal } from "@/redux/fetures/basket";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Icon from "../icons/Icon";
import CheckModule from "../module/CheckModule";
import Basket from "./Basket";
import Login from "./Lgin";
import Search from "./Search";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const triggerModule = () => {
    setIsOpen(!isOpen);
    dispatch(clculateTotal());
  };
  return (
    <div className="w-full py-4 flex items-center justify-between relative">
      <div className="w-1/2 flex items-center gap-2">
        <p className="flex flex-col gap-1">
          <span className="font-bold text-2xl">پانیذ</span>
          <span className="font-medium text-[0.5rem]">هایپر مارکت آنلاین</span>
        </p>
        <Search />
      </div>
      <div className="flex items-center gap-2">
        <Login />
        <Basket triggerModule={triggerModule} />
      </div>
      {isOpen && <CheckModule />}
    </div>
  );
};
export default Header;
