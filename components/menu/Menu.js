import { triggCategiry } from "@/redux/fetures/deleteBasketModule";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../module/CategoriesModule";
import Location from "./Location";

const Menu = ({ productGroups }) => {
  const isCategory = useSelector(
    (state) => state.deleteBasketModule.isCategory
  );
  const dispatch = useDispatch();
  return (
    <div className="py-2 flex items-center justify-between relative">
      <div className="flex items-center gap-6">
        <div
          onClick={() => dispatch(triggCategiry())}
          className="flex items-center cursor-pointer relative"
        >
          <img src="/icons/Group 313.svg" />
          <p className="font-medium text-xs">دسته بندی‌ها</p>
        </div>
        <div className="flex items-center cursor-pointer">
          <img src="/icons/house.svg" />
          <p className="font-medium text-xs">خانه</p>
        </div>
        <div className="flex items-center cursor-pointer">
          <img src="/icons/weblog.svg" />
          <p className="font-medium text-xs">وبلاگ</p>
        </div>
        <div className="flex items-center cursor-pointer">
          <img src="/icons/user-full-body.svg" />
          <p className="font-medium text-xs">درباره ما</p>
        </div>
        <div className="flex items-center cursor-pointer">
          <img src="/icons/help-microphone-person-profile-suuport.svg" />
          <p className="font-medium text-xs">تماس باما</p>
        </div>
        <div className="flex items-center cursor-pointer">
          <img src="/icons/shopping-basket.svg" />
          <p className="font-medium text-xs">جشنواره</p>
        </div>
      </div>
      {isCategory && <Categories productGroups={productGroups} />}
      <Location />
    </div>
  );
};
export default Menu;
