import { NavLink } from "react-router";
import HospitalSlide from "./HosSlider";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
            className="w-5 h-5 text-green-500 mt-[3px] dark:text-white"
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
      <div className="bg-white ">
        <HospitalSlide />
      </div>
      
      {/* 1st row */}

      <section className="flex items-center justify-center object-contain">
        {/* here is profile card 1 */}
        <div className="m-2">
          

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="items-center object-cover object-center h-[150px] w-auto"
                src="../../img/rangpurmedi.jpg"
                alt=""
              />
            </a>
            <div className="px-2 py-3">
              <div>
                <h2 className="text-[14px] font-bold">
                  রংপুর মেডিকেল কলেজ হাসপাতাল
                </h2>
                <p className="text-[13px] m-1 "> +৮৮০-১৩১১২৩৪৫</p>
                <p className="text-[13px] m-1">ধাপ রোড , মেডিকেল মোড়</p>
              </div>
              <NavLink  to='/details-one-hospitals'
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
        </div>
        <div className="m-2">
          {/* here is  profile card 2*/}

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="items-center object-cover object-center h-[150px] w-auto"
                src="../../img/labaid.jpg"
                alt=""
              />
            </a>
            <div className="px-2 py-3">
              <div>
                <h2 className="text-[14px] font-bold">
                ল্যাব এইড ডায়াগনস্টিক সেন্টার
                </h2>
                <p className="text-[13px] m-1 "> +৮৮০-১৩১১২৩৪৫ </p>
                <p className="text-[13px] m-1">ধাপ রোড , মেডিকেল মোড়</p>
              </div>
              <NavLink to='/labaid'
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
        </div>
      </section>
          {/* 2nd row */}
      <section className="flex items-center justify-center object-contain">
        {/* here is profile card 1 */}
        <div className="m-2">
          

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="items-center object-cover object-center h-[150px] w-auto"
                src="../../img/popular.jpg"
                alt=""
              />
            </a>
            <div className="px-2 py-3">
              <div>
                <h2 className="text-[14px] font-bold">
                  পপুলার ডায়াগনস্টিক সেন্টার
                </h2>
                <p className="text-[13px] m-1 "> +৮৮০ ৯৬৬৬ ৭৮৭৮০১</p>
                <p className="text-[13px] m-1">৭৭/১, রোড নং-১, ডিএইচপি, জেল রোড, রংপুর।</p>
              </div>
              <NavLink  to='/popular'
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
        </div>
        <div className="m-2">
          {/* here is  profile card 2*/}

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="items-center object-cover object-center h-[145px] w-[240px]"
                src="../../img/good-health.jpg"
                alt=""
              />
            </a>
            <div className="px-2 py-3">
              <div>
                <h2 className="text-[14px] font-bold">
                গুড হেলথ ডায়াগনস্টিক সেন্টার
                </h2>
                <p className="text-[13px] m-1 "> +৮৮০-১৩১১২৩৪৫ </p>
                <p className="text-[13px] m-1">ধাপ রোড , মেডিকেল মোড়</p>
              </div>
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
      </section>
      <section className="flex items-center justify-center object-contain">
        {/* here is profile card 1 */}
        <div className="m-2">
          

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="items-center object-cover object-center h-[150px] w-auto"
                src="../../img/rangpurmedi.jpg"
                alt=""
              />
            </a>
            <div className="px-2 py-3">
              <div>
                <h2 className="text-[14px] font-bold">
                  রংপুর মেডিকেল কলেজ হাসপাতাল
                </h2>
                <p className="text-[13px] m-1 "> +৮৮০-১৩১১২৩৪৫</p>
                <p className="text-[13px] m-1">ধাপ রোড , মেডিকেল মোড়</p>
              </div>
              <NavLink  to='/details-one-hospitals'
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
        </div>
        <div className="m-2">
          {/* here is  profile card 2*/}

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="items-center object-cover object-center h-[150px] w-auto"
                src="../../img/labaid.jpg"
                alt=""
              />
            </a>
            <div className="px-2 py-3">
              <div>
                <h2 className="text-[14px] font-bold">
                ল্যাব এইড ডায়াগনস্টিক সেন্টার
                </h2>
                <p className="text-[13px] m-1 "> +৮৮০-১৩১১২৩৪৫ </p>
                <p className="text-[13px] m-1">ধাপ রোড , মেডিকেল মোড়</p>
              </div>
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
      </section>
      <section className="flex items-center justify-center object-contain">
        {/* here is profile card 1 */}
        <div className="m-2">
          

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="items-center object-cover object-center h-[150px] w-auto"
                src="../../img/rangpurmedi.jpg"
                alt=""
              />
            </a>
            <div className="px-2 py-3">
              <div>
                <h2 className="text-[14px] font-bold">
                  রংপুর মেডিকেল কলেজ হাসপাতাল
                </h2>
                <p className="text-[13px] m-1 "> +৮৮০-১৩১১২৩৪৫</p>
                <p className="text-[13px] m-1">ধাপ রোড , মেডিকেল মোড়</p>
              </div>
              <NavLink  to='/details-one-hospitals'
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
        </div>
        <div className="m-2">
          {/* here is  profile card 2*/}

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="items-center object-cover object-center h-[150px] w-auto"
                src="../../img/labaid.jpg"
                alt=""
              />
            </a>
            <div className="px-2 py-3">
              <div>
                <h2 className="text-[14px] font-bold">
                ল্যাব এইড ডায়াগনস্টিক সেন্টার
                </h2>
                <p className="text-[13px] m-1 "> +৮৮০-১৩১১২৩৪৫ </p>
                <p className="text-[13px] m-1">ধাপ রোড , মেডিকেল মোড়</p>
              </div>
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
      </section>
      <section className="flex items-center justify-center object-contain">
        {/* here is profile card 1 */}
        <div className="m-2">
          

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="items-center object-cover object-center h-[150px] w-auto"
                src="../../img/rangpurmedi.jpg"
                alt=""
              />
            </a>
            <div className="px-2 py-3">
              <div>
                <h2 className="text-[14px] font-bold">
                  রংপুর মেডিকেল কলেজ হাসপাতাল
                </h2>
                <p className="text-[13px] m-1 "> +৮৮০-১৩১১২৩৪৫</p>
                <p className="text-[13px] m-1">ধাপ রোড , মেডিকেল মোড়</p>
              </div>
              <NavLink  to='/details-one-hospitals'
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
        </div>
        <div className="m-2">
          {/* here is  profile card 2*/}

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="items-center object-cover object-center h-[150px] w-auto"
                src="../../img/labaid.jpg"
                alt=""
              />
            </a>
            <div className="px-2 py-3">
              <div>
                <h2 className="text-[14px] font-bold">
                ল্যাব এইড ডায়াগনস্টিক সেন্টার
                </h2>
                <p className="text-[13px] m-1 "> +৮৮০-১৩১১২৩৪৫ </p>
                <p className="text-[13px] m-1">ধাপ রোড , মেডিকেল মোড়</p>
              </div>
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
      </section>
      <br />
      <br />
      <br />
      
    </div>
  );
};

export default Hospitals;
