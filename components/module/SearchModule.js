"use client";
import request from "@/hooks/fetch data/requestToApi";
import { deleteHistory } from "@/redux/fetures/historySearch";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../app/globals.css";
import SearchResault from "../header/SearchResault";
const SearchModule = ({ isSearchOpen, close, productGroups }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [resaults, setResaults] = useState();
  const [value, setValue] = useState("");
  const history = useSelector((state) => state.historySearch.history);
  const dispatch = useDispatch();
  const ref = useRef(null);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isSearchOpen && ref.current && !ref.current.contains(e.target)) {
        close();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isSearchOpen]);
  useEffect(() => {
    setTimeout(() => {
      const getData = async (id) => {
        setIsLoading(true);
        setResaults(
          await request(
            `https://newapi.313shops.com/api/Product/GetGroupProducts/73/${id}`,
            "Get"
          )
        );
        setIsLoading(false);
      };

      const check = productGroups?.data.result.find((item) =>
        item.groupName.includes(value)
      );
      if (check) {
        getData(check.id);
        console.log(check.id);
      }
    }, 500);
  }, [value]);
  return (
    <div
      ref={ref}
      className="w-full flex flex-col absolute top-[-10px] bg-white shadow-info rounded-md"
    >
      <div className="w-full flex items-center px-4 py-1  gap-2 border-b-2 border-main-blue">
        <Icon icon="iconoir:search" width="20" />
        <input
          value={value}
          type={"text"}
          className="w-3/4 py-2 font-medium text-[0.7rem] focus:outline-none placeholder:font-light placeholder:text-[0.7rem]"
          placeholder="جستجو"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {history.length != 0 && (
        <div className="w-full flex flex-col px-4 gap-2 py-2 my-1">
          <div className="w-full flex items-center gap-4">
            <Icon icon="ic:outline-watch-later" width="20" />
            <p className="font-medium text-base">جست و جو‌های شما</p>
          </div>
          <div className=" brand_box">
            {history.map((item, index) => {
              return (
                <p
                  key={index}
                  className="min-w-fit flex items-center gap-2 px-2 py-1 text-xs font-light border rounded-xl"
                >
                  <span onClick={() => setValue(item.item)} className="">
                    {item.item}
                  </span>
                  <span onClick={() => dispatch(deleteHistory(item.id))}>
                    <Icon icon="iwwa:delete" width="20" />
                  </span>
                </p>
              );
            })}
          </div>
        </div>
      )}
      <div className="w-full flex flex-col px-4 gap-2 border-b py-2 my-1">
        <div className="w-full flex items-center gap-4">
          <Icon icon="pajamas:fire" width="20" hFlip={true} />
          <p className="font-medium text-base">جست و جو‌های پرطرفدار</p>
        </div>
        <div className="w-full">
          {productGroups && (
            <div className=" brand_box">
              {productGroups.data.result
                .filter((item) => item.groupName !== " ")
                .map((group, index) => (
                  <p
                    key={index}
                    className="min-w-fit px-2 py-1 text-xs font-light border rounded-xl"
                  >
                    {group.groupName}
                  </p>
                ))}
            </div>
          )}
        </div>
        {resaults && <SearchResault resaults={resaults} />}
      </div>
    </div>
  );
};

export default SearchModule;
