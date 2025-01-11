import "./css/Primary.css";

const Home = () => {
  return (
    <div className="m-2 mb-[70px]">
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
      <section className="flex items-center justify-center ">
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
        <section className="flex items-center justify-center object-contain">
          <div className="m-2">
            {/* here is profile card 1 */}

            <div className="bg-white border border-gray-200 rounded-lg shadow] dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="items-center object-cover object-center h-[150px] w-auto"
                  src="../../img/hospital.jpg"
                  alt=""
                />
              </a>
              <div className="px-2 py-3">
                <a href="#">
                <h2 className="text-[15px] font-bold">রংপুর মেডিকেল কলেজ হাসপাতাল</h2>
              <p className="text-[13px] m-1 "> +৮৮০-১৩১১২৩৪৫</p>
              <p className="text-[13px] m-1"><span className="font-bold">ঠিকানা -</span> ধাপ রোড , মেডিকেল মোড়</p>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-2 py-1 font-normal text-center text-white bg-green-500 rounded-lg text-[10] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  বিস্তারিত
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-1"
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
          </div>
          <div className="m-2">
            {/* here is profile card 2*/}

            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="items-center object-cover object-center h-[150px] w-auto" 
                  src="../../img/hospital.jpg"
                  alt=""
                />
              </a>
              <div className="px-2 py-3">
              <a href="#">
                <h2 className="text-[18px] font-bold">রংপুর মেডিকেল কলেজ হাসপাতাল</h2>
              <p className="text-[13px] m-1 "> +৮৮০-১৩XXXXXXXX </p>
              <p className="text-[13px] m-1"><span className="font-bold">ঠিকানা -</span> ধাপ রোড , মেডিকেল মোড়</p>
                </a>
                <a
                  href="#"
                 className="inline-flex items-center px-3 py-2 font-medium text-center text-white bg-green-500 rounded-lg flexitems-center hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800 tex-[15px]"
                >
                  বিস্তারিত
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-1"
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
          </div>
        </section>
        {/* recommended ambulance */}
        <div className="recommended-ambulance">
        <h2 className="mt-2 mb-2">Recommended Ambulance</h2>
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
      
      {/* Recommended ambulance cards carousel*/}
      <section className="flex items-center justify-center object-contain">
          <div className="m-2">
            {/* here is profile card 1 */}

            <div className="bg-white border border-gray-200 rounded-lg shadow] dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="items-center object-cover object-center h-[150px] w-auto"
                  src="../../img/hospital.jpg"
                  alt=""
                />
              </a>
              <div className="px-2 py-3">
                <a href="#">
                <h2 className="text-[15px] font-bold">রংপুর মেডিকেল কলেজ হাসপাতাল</h2>
              <p className="text-[10px] m-1 ">০১৩XXXXXXXX </p>
              <p className="text-[10px] m-1"><span className="font-bold">ঠিকানা -</span> ধাপ রোড , মেডিকেল মোড়</p>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 font-medium text-center text-white bg-green-500 rounded-lg text-[15] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  বিস্তারিত
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-1"
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
          </div>
          <div className="m-2">
            {/* here is profile card 2*/}

            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="items-center object-cover object-center h-[150px] w-auto" 
                  src="../../img/hospital.jpg"
                  alt=""
                />
              </a>
              <div className="px-2 py-3">
              <a href="#">
                <h2 className="text-[18px] font-bold">রংপুর মেডিকেল কলেজ হাসপাতাল</h2>
              <p className="text-[13px] m-1 "> <span className="font-bold">ফোন নাম্বার -</span> ০১৩XXXXXXXX </p>
              <p className="text-[13px] m-1"><span className="font-bold">ঠিকানা -</span> ধাপ রোড , মেডিকেল মোড়</p>
                </a>
                <a
                  href="#"
                 className="inline-flex items-center px-3 py-2 font-medium text-center text-white bg-green-500 rounded-lg flexitems-center hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800 tex-[15px]"
                >
                  বিস্তারিত
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-1"
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
          </div>
        </section>
    </div>
  );
};

export default Home;
