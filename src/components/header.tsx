function Header() {
  return (
    <header className=" w-full fixed top-0 left-0 shadow-md z-20">
      <div className="flex h-15 items-center justify-between px-4 bg-gray-200">
        <div className="h-10 leading-[40px]">
          <button className="bg-transparent text-xl">&#9776;</button>
          <span className="ml-1.5 text-lg">Yuntube</span>
        </div>
        <div className="w-1/2">
          <form
            className="flex max-w-full" /**</div>onSubmit="return false;"**/
          >
            <input
              className="w-[calc(100%-60px)] h-10 px-1.5 border border-gray-400 border-r-0 rounded-l-sm"
              placeholder="보고싶은 영상"
            />
            <button className="w-15 h-10 border border-gray-400 border-l-0 rounded-r-sm">
              검색
            </button>
          </form>
        </div>
        <div className="flex">
          <button className="hidden mr-1.5 border-none bg-transparent text-xl md:hidden">
            &#128269;
          </button>

          <div className="h-full relative">
            <div className="w-4 h-4 rounded-full border border-gray-200 bg-salmon"></div>
            <div className="flex flex-col bg-white invisible opacity-0 transition-opacity duration-500 ease-in-out absolute top-[50px] right-2.5 w-75 h-25 rounded-lg overflow-hidden">
              <button className="h-1/2 text-base border-none">로그아웃</button>
              <button className="h-1/2 text-base border-none">다크 모드</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
