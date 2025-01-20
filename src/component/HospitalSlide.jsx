import { NavLink } from "react-router";


const HospitalSlide = () => {
    return (
        <div  className="max-w-md m-3 mx-auto">
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
        </div>
    );
};

export default HospitalSlide;