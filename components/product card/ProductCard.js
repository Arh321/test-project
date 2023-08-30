import toFarsiNumber from "@/hooks/toPersion";

const ProductCard = ({ name }) => {
  return (
    <div className="w-[22.5%] flex flex-col gap-4 rounded-xl border-b  shadow-productCard py-7 bg-gradient-to-b from-white from-50% via-gray-100 via-70% to-gray-300 to-100%">
      <div className="w-full flex justify-center items-center">
        <div className="w-1/2 aspect-square rounded-full flex justify-center items-center shadow-info">
          <img src="https://measomarket.com/view/figma/cat2.png" />
        </div>
      </div>
      <p className="w-full text-center font-bold text-xl">{name}</p>
      <p className="w-full text-center font-bold text-sm">
        بیش از{toFarsiNumber(30000)} کالا
      </p>
    </div>
  );
};
export default ProductCard;
