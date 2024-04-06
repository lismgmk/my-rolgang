const TwSizeIndicator = () => {
  if (process.env.NODE_ENV === "development") {
    return (
      <div className="2xl:bg-pink-200 fixed left-0 top-0 z-[999] flex w-[30px] items-center justify-center bg-gray-200 py-[2.5px] text-[12px] uppercase text-black sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200">
        <span className="block sm:hidden">all</span>
        <span className="hidden sm:block md:hidden">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="2xl:hidden hidden xl:block">xl</span>
        <span className="2xl:block hidden">2xl</span>
      </div>
    );
  } else {
    return null;
  }
};

export default TwSizeIndicator;
