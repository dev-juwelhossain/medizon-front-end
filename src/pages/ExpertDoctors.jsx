import { NavLink } from "react-router";


const ExpertDoctors = () => {
    return (
        <div className="max-w-md mb-[70px] m-3 mx-auto">
        {/* back button */}
        <NavLink to='/doctors' className="inline-flex px-2 py-1 mb-4 text-lg font-semibold text-green-500 dark:text-white">
          <a href="">
            <svg
              className="w-5 h-5 text-green-500 mt-[2px] dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
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
          <h3 className=""> বিশেষজ্ঞ ডাক্তার তালিকা</h3>
        </NavLink>
        {/* Favourite Doctors */}
        <div className="popular-doctors">
          <h2 className="mb-2 ml-2 text-[18px] font-medium">বিশেষজ্ঞ ডাক্তাররা</h2>
        </div>
  
        {/* ##### Doctors List###### */}
  
        <div className="mb-2 doctor-profile">
          <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
            <div className="doctor-info">
              <img src="../img/doctor.jpg" alt="" />
  
              <div>
                <p className="mt-2 text-center ">অভিজ্ঞতা: ১৫+ বছর</p>
              </div>
            </div>
  
            <div className="doctor-name">
              <h2>প্রফেসর ডাঃ দেবেন্দ্র নাথ সরকার</h2>
              <p>এমবিবিএস, এমসিপিএস, এমডি, এফসিসিপি, এফআরএসএম, এফএসিপি, এফআরসিপি</p>
              <p className="font-bold">বিভাগীয় প্রধান, রংপুর মেডিকেল কলেজ</p>
              <div className="w-20 h-auto mt-1 text-center text-white bg-green-500 rounded-sm doctor-button ">
                <p>মেডিসিন (Medicine)</p>
              </div>
              <p className="text-[15px] mt-1">রংপুর মেডিকেল কলেজ ও হাসপাতাল</p>
              <div className="mt-3 text-[12px]">
                <a
                  href="#"
                  className="inline-flex items-center float-end mt-5 px-[2px] py-[2px] font-normal text-center text-black  bg-white border border-black rounded-md text-[10px] hover:bg-green-500 hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
                >
                  বিস্তারিত
                  <svg
                    className="w-2 h-2 rtl:rotate-180 ms-1"
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
        </div>
  
        <div className="mb-2 doctor-profile">
          <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
            <div className="doctor-info">
              <img src="../img/doctor.jpg" alt="" />
  
              <div>
                <p className="mt-2 text-center ">অভিজ্ঞতা: ১৫+ বছর</p>
              </div>
            </div>
  
            <div className="doctor-name">
              <h2>প্রফেসর ডাঃ দেবেন্দ্র নাথ সরকার</h2>
              <p>এমবিবিএস, এমসিপিএস, এমডি, এফসিসিপি, এফআরএসএম, এফএসিপি, এফআরসিপি</p>
              <p className="font-bold">বিভাগীয় প্রধান, রংপুর মেডিকেল কলেজ</p>
              <div className="w-20 h-auto mt-1 text-center text-white bg-green-500 rounded-sm doctor-button ">
                <p>মেডিসিন (Medicine)</p>
              </div>
              <p className="text-[15px] mt-1">রংপুর মেডিকেল কলেজ ও হাসপাতাল</p>
              <div className="mt-3 text-[12px]">
                <a
                  href="#"
                  className="inline-flex items-center float-end mt-5 px-[2px] py-[2px] font-normal text-center text-black  bg-white border border-black rounded-md text-[10px] hover:bg-green-500 hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
                >
                  বিস্তারিত
                  <svg
                    className="w-2 h-2 rtl:rotate-180 ms-1"
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
        </div>
  
        <div className="mb-2 doctor-profile">
          <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
            <div className="doctor-info">
              <img src="../img/doctor.jpg" alt="" />
  
              <div>
                <p className="mt-2 text-center ">অভিজ্ঞতা: ১৫+ বছর</p>
              </div>
            </div>
  
            <div className="doctor-name">
              <h2>প্রফেসর ডাঃ দেবেন্দ্র নাথ সরকার</h2>
              <p>এমবিবিএস, এমসিপিএস, এমডি, এফসিসিপি, এফআরএসএম, এফএসিপি, এফআরসিপি</p>
              <p className="font-bold">বিভাগীয় প্রধান, রংপুর মেডিকেল কলেজ</p>
              <div className="w-20 h-auto mt-1 text-center text-white bg-green-500 rounded-sm doctor-button ">
                <p>মেডিসিন (Medicine)</p>
              </div>
              <p className="text-[15px] mt-1">রংপুর মেডিকেল কলেজ ও হাসপাতাল</p>
              <div className="mt-3 text-[12px]">
                <a
                  href="#"
                  className="inline-flex items-center float-end mt-5 px-[2px] py-[2px] font-normal text-center text-black  bg-white border border-black rounded-md text-[10px] hover:bg-green-500 hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
                >
                  বিস্তারিত
                  <svg
                    className="w-2 h-2 rtl:rotate-180 ms-1"
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
        </div>
  
        <div className="mb-2 doctor-profile">
          <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
            <div className="doctor-info">
              <img src="../img/doctor.jpg" alt="" />
  
              <div>
                <p className="mt-2 text-center ">অভিজ্ঞতা: ১৫+ বছর</p>
              </div>
            </div>
  
            <div className="doctor-name">
              <h2>প্রফেসর ডাঃ দেবেন্দ্র নাথ সরকার</h2>
              <p>এমবিবিএস, এমসিপিএস, এমডি, এফসিসিপি, এফআরএসএম, এফএসিপি, এফআরসিপি</p>
              <p className="font-bold">বিভাগীয় প্রধান, রংপুর মেডিকেল কলেজ</p>
              <div className="w-20 h-auto mt-1 text-center text-white bg-green-500 rounded-sm doctor-button ">
                <p>মেডিসিন (Medicine)</p>
              </div>
              <p className="text-[15px] mt-1">রংপুর মেডিকেল কলেজ ও হাসপাতাল</p>
              <div className="mt-3 text-[12px]">
                <a
                  href="#"
                  className="inline-flex items-center float-end mt-5 px-[2px] py-[2px] font-normal text-center text-black  bg-white border border-black rounded-md text-[10px] hover:bg-green-500 hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
                >
                  বিস্তারিত
                  <svg
                    className="w-2 h-2 rtl:rotate-180 ms-1"
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
        </div>
  
        <div className="mb-2 doctor-profile">
          <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
            <div className="doctor-info">
              <img src="../img/doctor.jpg" alt="" />
  
              <div>
                <p className="mt-2 text-center ">অভিজ্ঞতা: ১৫+ বছর</p>
              </div>
            </div>
  
            <div className="doctor-name">
              <h2>প্রফেসর ডাঃ দেবেন্দ্র নাথ সরকার</h2>
              <p>এমবিবিএস, এমসিপিএস, এমডি, এফসিসিপি, এফআরএসএম, এফএসিপি, এফআরসিপি</p>
              <p className="font-bold">বিভাগীয় প্রধান, রংপুর মেডিকেল কলেজ</p>
              <div className="w-20 h-auto mt-1 text-center text-white bg-green-500 rounded-sm doctor-button ">
                <p>মেডিসিন (Medicine)</p>
              </div>
              <p className="text-[15px] mt-1">রংপুর মেডিকেল কলেজ ও হাসপাতাল</p>
              <div className="mt-3 text-[12px]">
                <a
                  href="#"
                  className="inline-flex items-center float-end mt-5 px-[2px] py-[2px] font-normal text-center text-black  bg-white border border-black rounded-md text-[10px] hover:bg-green-500 hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
                >
                  বিস্তারিত
                  <svg
                    className="w-2 h-2 rtl:rotate-180 ms-1"
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
        </div>
  
        <div className="mb-2 doctor-profile">
          <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
            <div className="doctor-info">
              <img src="../img/doctor.jpg" alt="" />
  
              <div>
                <p className="mt-2 text-center ">অভিজ্ঞতা: ১৫+ বছর</p>
              </div>
            </div>
  
            <div className="doctor-name">
              <h2>প্রফেসর ডাঃ দেবেন্দ্র নাথ সরকার</h2>
              <p>এমবিবিএস, এমসিপিএস, এমডি, এফসিসিপি, এফআরএসএম, এফএসিপি, এফআরসিপি</p>
              <p className="font-bold">বিভাগীয় প্রধান, রংপুর মেডিকেল কলেজ</p>
              <div className="w-20 h-auto mt-1 text-center text-white bg-green-500 rounded-sm doctor-button ">
                <p>মেডিসিন (Medicine)</p>
              </div>
              <p className="text-[15px] mt-1">রংপুর মেডিকেল কলেজ ও হাসপাতাল</p>
              <div className="mt-3 text-[12px]">
                <a
                  href="#"
                  className="inline-flex items-center float-end mt-5 px-[2px] py-[2px] font-normal text-center text-black  bg-white border border-black rounded-md text-[10px] hover:bg-green-500 hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
                >
                  বিস্তারিত
                  <svg
                    className="w-2 h-2 rtl:rotate-180 ms-1"
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
        </div>
        
      </div>
    );
};

export default ExpertDoctors;