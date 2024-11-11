function Navigation() {
  return (
    <nav className="fixed left-0 top-0 z-10 dark">
      <ul className="min-w-[200px] min-h-screen bg-gray-100 pt-20 list-none">
        <li className="dark:hover:bg-gray-600 transition flex px-4 py-2">
          <button className="border-none bg-transparent text-xl">
            &#9829;
          </button>
          <button
            className="ml-2 text-xl border-none"
            data-path="watch-history"
          >
            시청 기록
          </button>
        </li>
        <li className="nav__watchLaterVideos dark:hover:bg-gray-600 transition flex px-4 py-2">
          <button className="border-none bg-transparent text-xl">
            &#9829;
          </button>
          <button className="ml-2 text-xl border-none " data-path="watch-later">
            나중에 볼 동영상
          </button>
        </li>
        <li className="nav__likedVideos dark:hover:bg-gray-600  transition flex px-4 py-2">
          <button className="border-none bg-transparent text-xl">
            &#9829;
          </button>
          <button
            className="ml-2 text-xl border-none "
            data-path="liked-videos"
          >
            인기 동영상
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
