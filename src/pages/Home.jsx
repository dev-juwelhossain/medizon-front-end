import "./css/Primary.css";

const Home = () => {
  return (
    <div className="m-2 mb-[270px]">
      {/* ################### Start code here ##########################*/}

      {/* Intro Video Here */}
      <div className="intro-video @media screen and (max-width: 800px)">
        <iframe
          width="100%"
          height="200px"
          src="https://www.youtube.com/embed/eHJnEHyyN1Y"
          title="6 Tips on Being a Successful Entrepreneur | John Mullins | TED"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      {/* Recommended doctors  */}
      <div className="recommended-doctors">
        <h2 className="mt-2 ">Recommended Doctors</h2>
        <div className="flex items-center justify-between m-2 mt-3">
          <h2 className="mx-2 ">View All</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ffffff"
            className="float-right bg-green-500 rounded-full"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
      </div>
      {/* Recommended doctors cards carousel*/}
      <section className="flex items-center justify-between ">
        <div className="m-2 h-[180px] w-[275px] rounded-2xl shadow-xl">
          {/* here is profile card */}
        </div>
      </section>
      {/* recommended hospitals */}

        <div className="recommended-hospitals">
          <h2 className="mt-2 ">Recommended Hospitals</h2>
          <div className="flex items-center justify-between m-2 mt-3 -2">
            <h2 className="mx-2">View All</h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
              className="float-right text-green-500 bg-green-500 rounded-full"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </div>
        </div>
        {/* Recommended hospitals cards carousel*/}
        <section className="flex items-center justify-between ">
          <div className="m-2 h-[180px] rounded-2xl shadow-xl">
            {/* here is profile card */}

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="../../public/img/hospital.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                <h2 className="text-lg font-bold">রংপুর মেডিকেল কলেজ হাসপাতাল</h2>
              <p className="text-[15px]">ফোন নাম্বার - ০১৩XXXXXXXX </p>
              <p className="text-[15px]">ঠিকানা - ধাপ রোড , মেডিকেল মোড়</p>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* <div className="p-2">
              <img
                src="../../public/img/hospital.jpg"
                alt="Hospital Image"
                className="rounded-t-2xl"
              />
              <h2 className="text-lg font-bold">রংপুর মেডিকেল কলেজ হাসপাতাল</h2>
              <p className="text-[15px]">ফোন নাম্বার - ০১৩XXXXXXXX </p>
              <p className="text-[15px]">ঠিকানা - ধাপ রোড , মেডিকেল মোড়</p>
              <button
                type="button"
                className="px-4 py-2 mt-2 text-white bg-green-500 rounded-lg "
              >
                <a href="">বিস্তারিত</a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </button>
            </div> */}
          </div>
        </section>
    </div>
  );
};

export default Home;
