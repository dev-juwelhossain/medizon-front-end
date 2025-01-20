const SingleSlide = () => {
  return (
    <>
      {/* here is profile card */}
      <div className="max-w-md m-3 mx-auto">
        <div className="w-100% border  flex  gap-4 rounded-md shadow-lg p-4 bg-white">
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
            {/* button here */}
            <div className="mt-3 text-[12px] ">
              <a
                href="#"
                className="inline-flex items-center px-2  mt-2 font-normal text-center text-black  bg-white rounded-md text-[12px] hover:shadow-md"
              >
                বিস্তারিত
                <svg
                  className="w-4 h-5 text-green-500 dark:text-white"
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
      </div>
    </>
  );
};

export default SingleSlide;
