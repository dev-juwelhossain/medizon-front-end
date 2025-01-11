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
        <div className="w-100% border  flex gap-4 rounded-lg shadow-lg p-4 bg-white">
          <div className="doctor-info">
            <img src="../img/doctor.jpg" alt="" />

            <div>
              <p>অভিজ্ঞতা: ২০+ বছর</p>
            </div>
          </div>

          <div className="doctor-name">
            <h2>প্রফেসর ডাঃ অমরেশ চন্দ্র সাহা</h2>
            <p>এমবিবিএস, এফসিপিএস (মেডিসিন), এফএসিএপি (ইউএসএ)</p>
            <div className="doctor-button  bg-green-500 text-white text-center h-auto w-20 rounded-sm mt-1 ">
              <p>মেডিসিন বিশেষজ্ঞ</p>
            </div>
            <p className="text-[15px]">রংপুর মেডিকেল কলেজ ও হাসপাতাল</p>
            <div className="mt-3 text-[12px]">
              <a
                href=""
                className="flex items-center rounded-sm px-1 bg-green-500 text-white  hover:bg-green-600 w-[50%] hover:text-white "
              >
                বিস্তারিত
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#ffffff"
                >
                  <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
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
              <p>অভিজ্ঞতা: ১৫+ বছর</p>
            </div>
          </div>

          <div className="doctor-name">
            <h2>ডাঃ মােঃ আব্দুল মােমেন</h2>
            <p>এমবিবিএস, এমএস (অর্থোপেডিক সার্জারি)</p>
            <div className="doctor-button  bg-green-500 text-white text-center h-auto w-20 rounded-sm mt-1 ">
              <p>হাড়ের অস্ত্রোপচার</p>
            </div>
            <p className="text-[15px]">রংপুর মেডিকেল কলেজ ও হাসপাতাল</p>
            <div className="mt-3 text-[12px]">
              <a
                href=""
                className="flex items-center rounded-sm px-1 bg-green-500 text-white  hover:bg-green-600 w-[50%] hover:text-white "
              >
                বিস্তারিত
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#ffffff"
                >
                  <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
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
              src="../../public/img/neurologist (1).png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600">নিউরোলজিস্ট</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="../../public/img/neurologist (1).png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600 text-center">ইউরোলজিস্ট</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="../../public/img/neurologist (1).png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600 text-center">কার্ডিওলজিস্ট</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="../../public/img/neurologist (1).png"
              alt=""
            />
            <p className="text-[11px] mt-1 hover:text-green-600 text-center">গ্যাস্ট্রোরোলজিস্ট</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border border-black p-1 rounded-sm hover:bg-gray-200"
              src="../../public/img/neurologist (1).png"
              alt=""
            />
            <p className="text-[12px] mt-1 hover:text-green-600 text-center">ফিজিওথেরাপি</p>
          </a>
        </div>
      

        
      </section>
    </div>
  );
};

export default Doctors;
