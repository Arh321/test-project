const Location = () => {
  return (
    <div className="flex items-center">
      <img className="w-[36px] aspect-square" src="/icons/location.svg" />
      <input
        className="w-[160px] border border-gray-600 px-2 py-2 rounded-xl shadow-2xl font-medium text-xs focus:outline-none placeholder:font-medium placeholder:text-xs placeholder:text-black placeholder:drop-shadow"
        type="text"
        placeholder="ابتدا آدرس خود را وارد کنید"
      />
    </div>
  );
};
export default Location;
