import Location from "./Location";

const Menu = () => {
  return (
    <div className="py-2 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="flex items-center">
          <img src="/icons/Group 313.svg" />
          <p className="font-medium text-xs">دسته بندی‌ها</p>
        </div>
        <div className="flex items-center">
          <img src="/icons/house.svg" />
          <p className="font-medium text-xs">خانه</p>
        </div>
        <div className="flex items-center">
          <img src="/icons/weblog.svg" />
          <p className="font-medium text-xs">وبلاگ</p>
        </div>
        <div className="flex items-center">
          <img src="/icons/user-full-body.svg" />
          <p className="font-medium text-xs">درباره ما</p>
        </div>
        <div className="flex items-center">
          <img src="/icons/help-microphone-person-profile-suuport.svg" />
          <p className="font-medium text-xs">تماس باما</p>
        </div>
        <div className="flex items-center">
          <img src="/icons/shopping-basket.svg" />
          <p className="font-medium text-xs">جشنواره</p>
        </div>
      </div>
      <Location />
    </div>
  );
};
export default Menu;
