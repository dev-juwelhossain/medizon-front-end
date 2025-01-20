import { Link, NavLink } from "react-router";
import "./css/Secondary.css";

const Doctors = () => {
  return (
    <div className="items-center max-w-md mx-auto mb-2 ml-2 mr-3">
      {/* Start code here */}
     
      {/* back button */}
      <NavLink to='/' className="inline-flex px-1 py-1 mb-3 text-lg font-semibold text-green-500 dark:text-white">
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
        <h3 className="">ডাক্তার তালিকা</h3>
      </NavLink>
      
       {/* Recommended Doctors List */}
       
      <NavLink to='/expert-doctors' className="popular-doctors">
        <h2 className=""> বিশেষজ্ঞ ডাক্তাররা</h2>
      </NavLink>
      <div className="doctor-profile">
        <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
          <div className="doctor-info">
            <img src="../img/doctor.jpg" alt="" />

            <div>
              <p className="mt-3 ">অভিজ্ঞতা: ১৫+ বছর</p>
            </div>
          </div>

          <NavLink to='/details-one-doctors' className="doctor-name">
            <h2>ডাঃ মােঃ আব্দুল মােমেন</h2>
            <p>এমবিবিএস, এমএস (অর্থোপেডিক সার্জারি)</p>
            <div className="w-20 h-auto mt-1 text-center text-white bg-green-500 rounded-sm doctor-button ">
              <p>হাড়ের অস্ত্রোপচার</p>
            </div>
            <p className="text-[15px] mt-1">রংপুর মেডিকেল কলেজ ও হাসপাতাল</p>
            <div className="mt-3 text-[12px]">
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
          </NavLink>
        </div>
      </div>

      {/* Favourite Doctors */}
      <div className="popular-doctors">
        <h2>প্রিয় ডাক্তাররা</h2>
      </div>
      {/* Doctor Card */}
      <Link to="/doctor-details" className="doctor-profile">
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
      </Link>

      {/* Department of Doctors */}
      <div className="popular-doctors">
        <h2 className="mt-6">বিভাগ অনুযায়ী ডাক্তার</h2>
      </div>

      {/* Department List */}
      <section className="flex items-center justify-between ">
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/neurologist (1).png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              নিউরোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/urology.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              ইউরোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/physician.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              কার্ডিওলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/gastroenterology.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              গ্যাস্ট্রোরোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/physiotherapist.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              ফিজিওথেরাপি
            </p>
          </a>
        </div>
      </section>
      {/* 2nd Department of Doctor */}
      <section className="flex items-center justify-between ">
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/medicine.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              মেডিসিন
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/pediatrics.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              শিশু বিভাগ
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/orthopedics.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              অর্থোপেডিক্স
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/psychiatry.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              সাইকিয়াট্রিস্ট
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm  hover:shadow-lg"
              src="img/dermatology.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              ডার্মাটোলজি
            </p>
          </a>
        </div>
      </section>
      {/* Department Three */}
      <section className="flex items-center justify-between ">
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/maternity.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              গাইনোকোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/red-eye.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              অফথালমোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/cancer.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              অনকোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/endocrine.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              এন্ডোক্রাইনোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/nephrology.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              নেফ্রোলজি
            </p>
          </a>
        </div>
      </section>

      {/* Department Four Number Row */}

      <section className="flex items-center justify-between mb-20 ">
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/maternity.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              ডায়াবেটোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/red-eye.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              অফথালমোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/cancer.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              অনকোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/endocrine.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              ডেন্টিস্ট
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border  p-1 rounded-sm hover:bg-gray-200"
              src="img/nephrology.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              হোমিওপ্যাথি
            </p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
