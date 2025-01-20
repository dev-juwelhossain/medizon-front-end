import { NavLink } from "react-router";

const Hospitals = () => {
  return (
    <div className="max-w-md m-2 mx-auto">
      {/* back button start here */}
      <NavLink
        to="/"
        className="inline-flex px-2 py-1 mb-4 text-lg font-semibold text-green-500 dark:text-white"
      >
        <a href="">
          <svg
            className="w-5 h-5 text-green-500 mt-[4px] dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </a>
        <h3 className="">হাসপাতাল তালিকা</h3>
      </NavLink>
      {/* Hospitals list*/}
      
      {/* rangpur medical collage */}

      <div 
        className="bg-white border border-gray-300 rounded-lg shadow-md "
      >
        <div>
          <img
            className="flex justify-center items-center h-[135px] w-full object-cover rounded-t-lg"
            src="../../img/rangpurmedi.jpg"
            alt=""
          />
        </div>
        <div className="px-2 py-3 m-1">
          <div >
            <h2 className="text-[15px] font-bold">
              রংপুর মেডিকেল কলেজ হাসপাতাল
            </h2>
            <p className="text-[15px]  "> +৮৮০-১৩১১২৩৪৫</p>
            <p className="text-[14px] ">ধাপ রোড , মেডিকেল মোড়</p>
          </div>
          <NavLink to='/details-one-hospitals'
                href="#"
                className="inline-flex items-center px-2  mt-2 font-normal text-center text-black  bg-white rounded-md text-[13px] hover:shadow-md"
              >
                বিস্তারিত
                <svg
                  className="w-4 h-5 pb-[2px] text-green-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </NavLink>
        </div>
      </div>
      {/* labaid hospital */}
      <div className=" mt-6 m-1 bg-white border border-gray-200 rounded-lg shadow] dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="flex justify-center items-center h-[135px] w-full object-cover rounded-t-lg"
            src="../../img/labaid.jpg"
            alt=""
          />
        </a>
        <div className="px-2 py-3">
          <a href="#">
            <h2 className="text-[15px] font-bold">
              ল্যাব এইড ডায়াগনস্টিক সেন্টার
            </h2>
            <p className="text-[15px]  ">+৮৮০-১৩১১২৩৪৫</p>
            <p className="text-[14px]  ">ধাপ রোড , মেডিকেল মোড়</p>
          </a>
          <a
            href="#"
            className="flex justify-center w-20 h-7 items-center px-1 py-2 font-normal text-center text-black  bg-white border border-black rounded-lg text-[13px] hover:bg-green-500 hover:text-white hover:border-white mt-2"
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

      {/* popular diagnostic center */}

      <div className="mt-5 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="flex justify-center items-center h-[135px] w-full object-cover rounded-t-lg"
            src="../../img/popular.jpg"
            alt=""
          />
        </a>
        <div className="px-2 py-1">
          <a href="#">
            <h2 className="text-[15px] font-bold">
              পপুলার ডায়াগনস্টিক সেন্টার, রংপুর
            </h2>
            <p className="text-[15px] "> +৮৮০-১৩১১২৩৪৫</p>
            <p className="text-[14px] mb-2">
              ৭৭/১, রোড নং-১, ধাপ, জেল রোড, রংপুর
            </p>
          </a>
          <a
                href="#"
                className="inline-flex items-center px-2  mt-2 font-normal text-center text-black  bg-white rounded-md text-[13px] hover:shadow-md"
              >
                বিস্তারিত
                <svg
                  className="w-4 h-5 pb-[2px] text-green-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </a>
        </div>
      </div>

      {/* Prime Medical collage */}

      <div className="mt-5 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="flex justify-center items-center h-[135px] w-full object-cover rounded-t-lg"
            src="../../img/prime.jpeg"
            alt=""
          />
        </a>
        <div className="px-2 py-3">
          <a href="#">
            <h2 className="text-[15px] font-bold">
              প্রাইম মেডিকেল কলেজ হাসপাতাল
            </h2>
            <p className="text-[15px]  "> +৮৮০-১৩১১২৩৪৫</p>
            <p className="text-[14px] mb-2">পিরজাবাদ,বদরগঞ্জ রোড, রংপুর</p>
          </a>
          <a
                href="#"
                className="inline-flex items-center px-2  mt-2 font-normal text-center text-black  bg-white rounded-md text-[13px] hover:shadow-md"
              >
                বিস্তারিত
                <svg
                  className="w-4 h-5 pb-[2px] text-green-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </a>
        </div>
      </div>

      {/* mother and child hospital */}

      <div className=" mt-5 bg-white border border-gray-200 rounded-lg shadow] dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="flex justify-center items-center h-[135px] w-full object-cover rounded-t-lg"
            src="../../img/mother.jpg"
            alt=""
          />
        </a>
        <div className="px-2 py-3">
          <a href="#">
            <h2 className="text-[15px] font-bold">রংপুর মা ও শিশু হাসপাতাল</h2>
            <p className="text-[15px]  "> +৮৮০-১৭৯০৬৩২৩২৩</p>
            <p className="text-[14px] mb-2">
              দানির মোড় এর পাশেই, বাবুখা রোড,পশ্চিম বাবুখা, রংপুর
            </p>
          </a>
          <a
                href="#"
                className="inline-flex items-center px-2  mt-2 font-normal text-center text-black  bg-white rounded-md text-[13px] hover:shadow-md"
              >
                বিস্তারিত
                <svg
                  className="w-4 h-5 pb-[2px] text-green-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </a>
        </div>
      </div>

      {/* doctors community hospitals */}

      <div className=" mt-5 bg-white border border-gray-200 rounded-lg shadow] dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="flex justify-center items-center h-[135px] w-full object-cover rounded-t-lg"
            src="../../img/doctorsc.jpg"
            alt=""
          />
        </a>
        <div className="px-2 py-3">
          <a href="#">
            <h2 className="text-[15px] font-bold">
              ডক্টরস কমিউনিটি হাসপাতাল (প্রা.) লি.
            </h2>
            <p className="text-[15px] m-1 "> +৮৮০-১৭০১২৬৪৭০৪ </p>
            <p className="text-[14px] m-1">
              মেডিকেল পূর্ব গেট, গংগাচড়া রোড, রংপুর
            </p>
          </a>
          <a
                href="#"
                className="inline-flex items-center px-2  mt-2 font-normal text-center text-black  bg-white rounded-md text-[13px] hover:shadow-md"
              >
                বিস্তারিত
                <svg
                  className="w-4 h-5 pb-[2px] text-green-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </a>
        </div>
      </div>

      {/* good health hospitals */}

      <div className="mt-5 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="flex justify-center items-center h-[135px] w-full object-cover rounded-t-lg"
            src="../../img/good-health.jpg"
            alt=""
          />
        </a>
        <div className="px-2 py-3">
          <a href="#">
            <h2 className="text-[15px] font-bold">গুড হেলথ হাসপাতাল</h2>
            <p className="text-[15px]  "> +৮৮০-০১৭১৭৯৭৪৪৮৮ </p>
            <p className="text-[14px] mb-2 ">ধাপ রোড, রংপুর</p>
          </a>
          <a
                href="#"
                className="inline-flex items-center px-2  mt-2 font-normal text-center text-black  bg-white rounded-md text-[13px] hover:shadow-md"
              >
                বিস্তারিত
                <svg
                  className="w-4 h-5 pb-[2px] text-green-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </a>
        </div>
      </div>

      {/* marium eye hospital */}

      <div className="mt-5 mb-20 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="flex justify-center items-center h-[135px] w-full object-cover rounded-t-lg"
            src="../../img/marium.JPG"
            alt=""
          />
        </a>
        <div className="px-2 py-3">
          <a href="#">
            <h2 className="text-[15px] font-bold">মরিয়ম চক্ষু হাসপাতাল</h2>
            <p className="text-[15px]  "> +৮৮০-০১৭১৬২৯১৭৯৪ </p>
            <p className="text-[14px] mb-2"> জি এল রয় রোড, রেইলগেট, রংপুর</p>
          </a>
          <a
                href="#"
                className="inline-flex items-center px-2  mt-2 font-normal text-center text-black  bg-white rounded-md text-[13px] hover:shadow-md"
              >
                বিস্তারিত
                <svg
                  className="w-4 h-5 pb-[2px] text-green-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </a>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
