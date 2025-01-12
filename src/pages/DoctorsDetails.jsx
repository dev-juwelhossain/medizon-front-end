const DoctorsDetails = () => {
  return (
    <div className="m-2 mb-[70px]">
      {/* Favourite Doctors */}
      <div className="popular-doctors">
        <h2>প্রিয় ডাক্তাররা</h2>
      </div>

      {/* ##### Doctors List###### */}

      <div className="doctor-profile mb-2">
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

      <div className="doctor-profile mb-2">
        <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
          <div className="doctor-info">
            <img src="../img/doctor.jpg" alt="" />

            <div>
              <p className="mt-2 text-center ">অভিজ্ঞতা: ১৫+ বছর</p>
            </div>
          </div>

          <div className="doctor-name">
            <h2>প্রফেসর ডাঃ অমরেশ চন্দ্র সাহা</h2>
            <p>এমবিবিএস, এফসিপিএস (মেডিসিন), এফএসিপি (ইউএসএ)</p>
            <p className="font-bold">মেডিসিন বিশেষজ্ঞ, রংপুর মেডিকেল কলেজ ও হাসপাতাল</p>
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

      <div className="doctor-profile mb-2">
        <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
          <div className="doctor-info">
            <img src="../img/doctor.jpg" alt="" />

            <div>
              <p className="mt-2 text-center ">অভিজ্ঞতা: ১২+ বছর</p>
            </div>
          </div>

          <div className="doctor-name">
            <h2>প্রফেসর ডাঃ শাহ মোঃ সরওয়ার জাহান</h2>
            <p>এমবিবিএস, এফসিপিএস (মেডিসিন)</p>
            <p className="font-bold">মেডিসিন বিশেষজ্ঞ, রংপুর মেডিকেল কলেজ ও হাসপাতাল</p>
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

      <div className="doctor-profile mb-2">
        <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
          <div className="doctor-info">
            <img src="../img/doctor.jpg" alt="" />

            <div>
              <p className="mt-2 text-center ">অভিজ্ঞতা: ১২+ বছর</p>
            </div>
          </div>

          <div className="doctor-name">
            <h2>ডাঃ মোঃ আব্দুল বাসেত</h2>
            <p>এমবিবিএস, বিসিএস (স্বাস্থ্য), এমডি (ইন্টারনাল মেডিসিন)</p>
            <p className="font-bold">মেডিসিন বিশেষজ্ঞ, রংপুর মেডিকেল কলেজ ও হাসপাতাল</p>
            <div className="w-20 h-auto mt-1 text-center text-white bg-green-500 rounded-sm doctor-button ">
              <p>ইন্টারনাল মেডিসিন</p>
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

      <div className="doctor-profile mb-2">
        <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
          <div className="doctor-info">
            <img src="../img/doctor.jpg" alt="" />

            <div>
              <p className="mt-2 text-center ">অভিজ্ঞতা: ১২+ বছর</p>
            </div>
          </div>

          <div className="doctor-name">
            <h2>প্রফেসর ডাঃ এ.কে.এম. হানিফ চৌধুরী</h2>
            <p>এমবিবিএস, এফসিপিএস</p>
            <p className="font-bold">পাইলস, ফিস্টুলা, এবং হেপাটোবিলিয়ারি সার্জারি, রংপুর কমিউনিটি মেডিকেল কলেজ</p>
            <div className="w-20 h-auto mt-1 text-center text-white bg-green-500 rounded-sm doctor-button ">
              <p>সার্জারি</p>
            </div>
            <p className="text-[15px] mt-1">রংপুর কমিউনিটি মেডিকেল কলেজ</p>
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

      <div className="doctor-profile mb-2">
        <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
          <div className="doctor-info">
            <img src="../img/doctor.jpg" alt="" />

            <div>
              <p className="mt-2 text-center ">অভিজ্ঞতা: ১২+ বছর</p>
            </div>
          </div>

          <div className="doctor-name">
            <h2>ডাঃ মোস্ত. উম্মে হাবিবা বেগম</h2>
            <p>এমবিবিএস, ডি.জি.ও</p>
            <p className="font-bold">প্রসূতি, সিজারিয়ান ডেলিভারি, এবং জরায়ু সম্পর্কিত জটিলতা</p>
            <div className="w-20 h-auto mt-1 text-center text-white bg-green-500 rounded-sm doctor-button ">
              <p>গাইনোকোলজি</p>
            </div>
            <p className="text-[15px] mt-1">রংপুর মেডিকেল কলেজ হাসপাতাল</p>
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

export default DoctorsDetails;
