import "./css/Primary.css";

const Home = () => {
  return (
    <div className="m-2">
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
        <div className="m-5 h-[180px] w-[275px] rounded-2xl shadow-xl">
          {/* here is profile card */}
        </div>
      </section>
      {/* recommended hospitals */}

      <section>
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
          <div className="m-5 h-[180px] w-[275px] rounded-2xl shadow-xl">
            {/* here is profile card */}

            <div className="p-2">
              <img
                src=".../public/img/hospital.jpg"
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
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
