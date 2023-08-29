import Icon from "../icons/Icon";
import Basket from "./Basket";
import Login from "./Lgin";
import Search from "./Search";

const Header = () => {
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="w-1/2 flex items-center gap-2">
        <p className="flex flex-col gap-1">
          <span className="font-bold text-xl">پانیذ</span>
          <span className="font-medium text-[0.5rem]">هایپر مارکت آنلاین</span>
        </p>
        <Search />
      </div>
      <div className="flex items-center gap-2">
        <Login />
        <Basket />
      </div>
    </div>
  );
};
export default Header;
