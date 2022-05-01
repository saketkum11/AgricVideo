const Navigation = () => {
  return (
    <>
      <nav class="flex wt-100 bg-blue-5 items-center pd-4 text-color-0 m-y-9">
        <div class="pd-x-4 cursor">
          <a href="" class="text-dec text-color-0 text-m">
            Awsome Font
          </a>
        </div>
        <div className="">
          <input
            type="text"
            className=" pd-4 m-y-5 text-s rounded-m "
            placeholder="Search"
          />
        </div>
        <div class="m-lf">
          <ul class="flex style-none justify-around pd-x-4 ">
            <li>
              <a href="" class="text-dec  text-color-0 pd-4 ">
                Home
              </a>
            </li>
            <li>
              <a href="" class="text-dec  text-color-0 pd-4">
                About
              </a>
            </li>
            <li>
              <a href="" class="text-dec  text-color-0 pd-4">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>{" "}
    </>
  );
};

export { Navigation };
