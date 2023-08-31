"use client";
import BoxInfo from "@/components/box info/BoxInfo";
import ScrollBox from "@/components/discount of day section/ScrollBox";
import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";
import DeleteBasketModule from "@/components/noduls/DeleteBasketModule";
import ProductCard from "@/components/product card/ProductCard";
import SwiperSection from "@/components/swiper/SwiperSction";
import request from "@/fetch data/requestToApi";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/discount of day section/scrollBox.css";
export default function Home() {
  const [productGroups, setProductGroups] = useState(null);
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [brands, setBrands] = useState(null);
  const isDeleteBsketOpen = useSelector(
    (state) => state.deleteBasketModule.isDeleteBsketOpen
  );

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setProductGroups(
        await request(
          "https://newapi.313shops.com/api/Product/GetProductGroups/73",
          "Get"
        )
      );
      setProducts(
        await request(
          `https://newapi.313shops.com/api/Product/GetGroupProducts/73/59`,
          "Get"
        )
      );
      setBrands(
        await request(
          "https://newapi.313shops.com/api/Product/GetProductBrands",
          "Get"
        )
      );
      setIsLoading(false);
    };
    getData();
  }, []);

  const infos = [
    {
      icon: "https://measomarket.com/view/figma/icon-1.png",
      title: "ارسال سریع",
      subTitle: "ارسال سفارش در کمتر از یک ساعت",
    },
    {
      icon: "https://measomarket.com/view/figma/icon-2.png",
      title: "تنوع کالا",
      subTitle: "بیش از ۲۰.۰۰۰ قلم کالا",
    },
    {
      icon: "https://measomarket.com/view/figma/icon-3.png",
      title: "تخفیفات ویژه",
      subTitle: "تخفیف بر روی تمامی کالاها",
    },
    {
      icon: "https://measomarket.com/view/figma/icon-4.png",
      title: "خرید سلامت",
      subTitle: "ارسال سفارش به صورت ضدعفونی",
    },
  ];

  return (
    <>
      <div className={clsx("px-2 w-full")} dir="rtl">
        <Header />
        <Menu productGroups={productGroups} />
        <SwiperSection />
        <div className="w-full flex items-center justify-center gap-3 py-10">
          {infos.map((inf, index) => {
            return (
              <BoxInfo
                key={inf.title + index}
                icon={inf.icon}
                title={inf.title}
                subTitle={inf.subTitle}
              />
            );
          })}
        </div>
        <div className="w-[80%] mx-auto pt-12 pb-12 bg-main-discount-new flex rounded-lg">
          <div className="w-1/5 flex flex-col items-center justify-between pr-10">
            <p className="font-bold text-xl text-main-light-gray">
              تخفیف های روز
            </p>
            <p className="font-bold text-xl text-main-light-gray">14:32:09</p>
            <img src="https://measomarket.com/view/figma/box1.png" />
            <p className="font-bold text-xl text-main-light-gray">مشاهده همه</p>
          </div>
          <ScrollBox products={products?.data.result} />
        </div>
        <div className="w-[80%] mx-auto flex flex-col py-10">
          <div className="w-full flex items-center">
            <hr className="w-2/5 border bg-main-discount-new border-main-discount-new" />
            <p className="w-1/5 px-2 py-2 drop-shadow-lg shadow-black text-center font-bold text-2xl">
              دسته بندی محصولات
            </p>
            <hr className="w-2/5 border bg-main-discount-new border-main-discount-new" />
          </div>
          <div className=" flex flex-wrap justify-between gap-y-4 mt-5">
            {productGroups &&
              productGroups.data.result
                .filter((item) => item.groupName !== " ")
                .map((group, index) => {
                  return <ProductCard key={index} name={group.groupName} />;
                })}
          </div>
        </div>
        <div className="w-[80%] mx-auto flex flex-col py-10 ">
          <div className="w-full flex items-center">
            <hr className="w-2/5 border bg-main-discount-new border-main-discount-new" />
            <p className="w-1/5 px-2 py-2 drop-shadow-lg shadow-black text-center font-bold text-2xl">
              برند‌های محبوب
            </p>
            <hr className="w-2/5 border bg-main-discount-new border-main-discount-new" />
          </div>
          <div className="w-full flex justify-end">
            <button>
              <p className="drop-shadow-lg shadow-black text-center font-bold flex items-center gap-1">
                مشاهده همه{" "}
                <span className="text-main-discount-new text-xl">{">"}</span>{" "}
              </p>
            </button>
          </div>
          <ul className="brand_box">
            {brands &&
              brands.data.result.map((brand, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center shadow-info justify-center font-bold text-2xl"
                  >
                    <p className="w-[200px] text-center py-8">
                      {brand.brandTitle}
                    </p>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      {isDeleteBsketOpen && <DeleteBasketModule />}
    </>
  );
}
