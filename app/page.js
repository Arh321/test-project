"use client";
import BoxInfo from "@/components/box info/BoxInfo";
import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";
import SwiperSection from "@/components/swiper/SwiperSction";
import request from "@/fetch data/requestToApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setData(
        await request(
          "https://newapi.313shops.com/api/Product/GetProductGroups/73",
          "Get"
        )
      );
      setIsLoading(false);
    };
    getData();
  }, []);
  console.log(data);
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
    <div className="px-2" dir="rtl">
      <Header />
      <Menu />
      <SwiperSection />
      <div className="w-full flex items-center justify-center gap-3 py-10">
        {infos.map((inf) => {
          return (
            <BoxInfo
              icon={inf.icon}
              title={inf.title}
              subTitle={inf.subTitle}
            />
          );
        })}
      </div>
      <div className="w-[80%] mx-auto pt-12 pb-14 bg-main-discount-new flex">
        <div className="flex flex-col items-center gap-5 pr-10">
          <p className="font-bold text-xl text-main-light-gray">
            تخفیف های روز
          </p>
          <p className="font-bold text-xl text-main-light-gray">14:32:09</p>
          <img src="https://measomarket.com/view/figma/box1.png" />
          <p className="font-bold text-xl text-main-light-gray">مشاهده همه</p>
        </div>
      </div>
    </div>
  );
}
