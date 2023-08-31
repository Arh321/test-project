"use client";

import clsx from "clsx";

const Categories = ({ productGroups }) => {
  return (
    <div className="flex absolute top-12 right-0 bg-white z-20">
      <div className="grid grid-rows-4 grid-flow-col">
        {productGroups &&
          productGroups.data.result
            .filter((item) => item.groupName !== " ")
            .map((group, index) => {
              return (
                <div
                  className={clsx(
                    "w-[200px] flex items-center justify-between border border-main-light-gray"
                  )}
                >
                  <div className=" flex items-center gap-2 justify-between  px-2 py-3">
                    <img
                      className="w-4 aspect-square"
                      src="https://measomarket.com/uploads/products_images/164873-185x226.jpg"
                    />
                    <p className="font-light text-[0.9rem]">
                      {group.groupName}
                    </p>
                  </div>
                  <p>{">"}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};
export default Categories;
