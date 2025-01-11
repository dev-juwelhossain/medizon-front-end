import "./css/Secondary.css";

const Doctors = () => {
  return (
    <div className="m-3">
      {/* Start code here */}
      {/* Recommended Doctors List */}
      <div className="popular-doctors">
        <h2>জনপ্রিয় ডাক্তাররা</h2>
      </div>
      <div className="doctor-profile">
            <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
              <div className="doctor-info">
                <img src="../img/doctor.jpg" alt="" />

                <div>
                  <p className="mt-2 ">অভিজ্ঞতা: ১৫+ বছর</p>
                </div>
              </div>

              <div className="doctor-name">
                <h2>ডাঃ মােঃ আব্দুল মােমেন</h2>
                <p>এমবিবিএস, এমএস (অর্থোপেডিক সার্জারি)</p>
                <div className="w-20 h-auto mt-1 text-center text-white bg-green-500 rounded-sm doctor-button ">
                  <p>হাড়ের অস্ত্রোপচার</p>
                </div>
                <p className="text-[15px] mt-1">রংপুর মেডিকেল কলেজ ও হাসপাতাল</p>
                <div className="mt-3 text-[12px]">
                <a
                href="#"
                className="inline-flex items-center float-end mt-5 px-[2px] py-[2px] font-normal text-center text-black  bg-white border border-black rounded-md text-[10px] hover:bg-green-500 hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
              >
                বিস্তারিত
                <svg
                  className="rtl:rotate-180 w-2 h-2 ms-1"
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

      {/* Favourite Doctors */}
      <div className="popular-doctors">
        <h2>প্রিয় ডাক্তাররা</h2>
      </div>
      {/* Doctor Card */}
      <div className="doctor-profile">
            <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
              <div className="doctor-info">
                <img src="../img/doctor.jpg" alt="" />

                <div>
                  <p className="mt-2 ">অভিজ্ঞতা: ১৫+ বছর</p>
                </div>
              </div>

              <div className="doctor-name">
                <h2>ডাঃ মােঃ আব্দুল মােমেন</h2>
                <p>এমবিবিএস, এমএস (অর্থোপেডিক সার্জারি)</p>
                <div className="w-20 h-auto mt-1 text-center text-white bg-green-500 rounded-sm doctor-button ">
                  <p>হাড়ের অস্ত্রোপচার</p>
                </div>
                <p className="text-[15px] mt-1">রংপুর মেডিকেল কলেজ ও হাসপাতাল</p>
                <div className="mt-3 text-[12px]">
                <a
                href="#"
                className="inline-flex items-center float-end mt-5 px-[2px] py-[2px] font-normal text-center text-black  bg-white border border-black rounded-md text-[10px] hover:bg-green-500 hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
              >
                বিস্তারিত
                <svg
                  className="rtl:rotate-180 w-2 h-2 ms-1"
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

      {/* Department of Doctors */}
      <div className="popular-doctors">
        <h2 className="mt-6">বিভাগ অনুযায়ী ডাক্তার</h2>
      </div>

      {/* Department List */}
      <section className=" flex items-center justify-between">
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="img/neurologist (1).png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600">নিউরোলজি</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="img/urology.png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600 text-center">ইউরোলজি</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="img/physician.png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600 text-center">কার্ডিওলজি</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="img/gastroenterology.png"
              alt=""
            />
            <p className="text-[11px] mt-1 hover:text-green-600 text-center">গ্যাস্ট্রোরোলজি</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="img/urology.png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600 text-center">ফিজিওথেরাপি</p>
          </a>
        </div>
        

        
      </section>
      {/* 2nd Department of Doctor */}
      <section className=" flex items-center justify-between">
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="img/medicine.png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600 text-center">মেডিসিন</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="img/pediatrics.png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600 text-center">শিশু বিভাগ</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="img/orthopedics.png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600 text-center">অর্থোপেডিক্স</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="img/psychiatry.png"
              alt=""
            />
            <p className="text-[11px] mt-1 hover:text-green-600 text-center">মনোরোগবিদ্যা</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="img/dermatology.png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600 text-center">ডার্মাটোলজি</p>
          </a>
        </div>
      </section>
      {/* Department Three */}
      <section className=" flex items-center justify-between">
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src=""
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600 text-center">মেডিসিন</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="../../public/img/pediatrics.png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600 text-center">শিশু বিভাগ</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="../../public/img/orthopedics.png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600 text-center">অর্থোপেডিক্স</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="img/psychiatry.png"
              alt=""
            />
            <p className="text-[11px] mt-1 hover:text-green-600 text-center">মনোরোগবিদ্যা</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="img/dermatology.png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600 text-center">ডার্মাটোলজি</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
