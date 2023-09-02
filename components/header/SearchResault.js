"use client";
import { addHistory } from "@/redux/fetures/historySearch";
import { useDispatch, useSelector } from "react-redux";

const SearchResault = ({ resaults }) => {
  const dispatch = useDispatch();
  const hsndleAddHistory = (item, id) => {
    dispatch(addHistory({ item: item, id: id }));
  };
  return (
    <div className="w-full flex flex-col gap-2 py-2 px-4 max-h-[320px] overflow-y-scroll scroll-m-0">
      {resaults?.data.result.map((item, index) => {
        return (
          <p
            key={index}
            onClick={() => hsndleAddHistory(item.productName, item.id)}
            className="font-medium text-[0.8rem]"
          >
            {item.productName}
          </p>
        );
      })}
    </div>
  );
};

export default SearchResault;
