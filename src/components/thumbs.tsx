function Thumbs() {
  return (
    <section className="thumbs">
      <div className="thumbs__wrapper flex flex-wrap justify-between mt-[60px] ml-[200px] pt-[20px] pl-[10px]">
        <div id="${playerId}"></div>
        <div className="thumbs__info flex">
          <div className="thumbs__profile">
            <img
              className="thumbs__profile--img w-9 h-9 border rounded-full"
              src="../assets/정면 사진.jpg"
              alt="이미지 사진"
            />
          </div>
          <div
            className="thumbs__text pl-[10px]"
            //* style="width: calc(100% - 36px);" *//
          >
            <h3 className="thumbs__text--title text-[1.2rem] mb-[0.5rem]">
              {/* ${video.title} */}
            </h3>
            <p className="thumbs__text--owner text-[1rem] text-[#aeaeae] mb-[0.2rem]">
              {/* ${video.owner} */}
            </p>
            <p className="thumbs__text--anal text-[0.9rem] text-[#aeaeae]">
              {/* 조회수 ${video.views} &middot; ${video.time} */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Thumbs;
