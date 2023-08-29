const BoxInfo = ({ icon, title, subTitle }) => {
  return (
    <div className="w-[200px] relative flex flex-col bg-gray-300 py-[12px] rounded-xl shadow-md shadow-gray-500">
      <div className="w-full flex justify-center absolute top-[-32px]">
        <div className="w-[44px] h-[44px] rounded-lg bg-white shadow-md shadow-gray-700 flex items-center justify-center">
          <img src={icon} />
        </div>
      </div>
      <p className="flex flex-col gap-2 items-center">
        <span className="font-extrabold text-[0.9rem]">{title}</span>
        <span className="font-medium text-[0.7rem]">{subTitle}</span>
      </p>
    </div>
  );
};

export default BoxInfo;
