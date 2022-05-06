const PlaylistCard = ({ data }) => {
  return (
    <>
      <div className="card flex cards  flex-column box-shadow-2 rounded-m bg-black-0 text-color-9 text-dec position-rel">
        <div className="flex h-100 flex-column justify-even pd-5">
          <div className="  flex flex-wrap items-start pd-y-2">
            <span>{data.title}</span>
          </div>
          <div className="flex items-center justify-start pd-y-2">
            <img
              src=""
              className="object-content card-icon rounded-full"
              alt=""
            />
            <span
              className="text-semibold  text-color-9 pd-x-3 
    "
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};
export { PlaylistCard };
