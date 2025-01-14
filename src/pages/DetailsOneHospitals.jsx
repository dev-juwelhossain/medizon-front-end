const DetailsOneHospitals = () => {
  return (
    <div className="max-w-md m-3 mx-auto">
      {/* back button */}
      <div className="inline-flex px-2 py-1 mb-4 text-lg font-semibold text-green-500 dark:text-white">
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
        <h3 className="">হাসপাতালের বিস্তারিত </h3>
      </div>
      <section>
        <div>
          <img
            src="../../img/rangpurmedi.jpg"
            alt="Rangpur Medical Hospital"
            className="w-full h-auto "
          />
        </div>

        <div className="m-2">
          <h2 className="text-xl font-semibold">রংপুর মেডিকেল কলেজ হাসপাতাল</h2>
          {/* information button */}
          <div className="mt-10 ">
            <h4 className="px-3 mx-3 ml-3 font-semibold text-center text-green-500 rounded-lg shadow-md bg-gray-50">
              তথ্য ও সেবা
            </h4>
          </div>
          <br />

          {/* information section */}

          <div>
            <div className="m-2">
              <h3 className="text-medium text-slate-800">
                <span className="font-bold">স্থান: </span> রংপুর মেডিকেল কলেজ
                হাসপাতাল, Rangpur- Dinajpur Highway, Cantt, Near Central Jail,
                রংপুর 5400
              </h3>
            </div>

            {/* contact info */}
            <h3 className="ml-3 mb-2 font-semibold text-[20px]">
              যোগাযোগ করুন
            </h3>

            <div className="flex items-center mb-2 ml-3 space-x-1">
              <svg
                className="w-[24px] h-[24px] text-green-600 dark:text-white  border border-green-600 rounded-xl"
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
                  strokeWidth="1"
                  d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                />
              </svg>
              <p>+880 12345-67890</p>
            </div>
            <div className="flex items-center ml-3 space-x-1">
              <svg
                className="w-[24px] h-[24px] text-green-600 border border-green-600 rounded-xl dark:text-white"
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
                  strokeWidth="1"
                  d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                />
              </svg>
              <p>+880 12345-67890</p>
            </div>
          </div>
          <br />
        </div>
        <div>
          <h2 className="ml-3 text-[20px] font-semibold">হাসপাতাল সম্পর্কে </h2>
          <div className="m-1">
            <p className="p-2 border border-gray-400 rounded-lg shadow-lg">
              রংপুর মেডিকেল কলেজ হাসপাতাল উত্তরবঙ্গের অন্যতম বৃহৎ ও প্রধান
              চিকিৎসা ও শিক্ষা প্রতিষ্ঠান। ১৯৭০ সালে প্রতিষ্ঠিত এই হাসপাতালটি
              শুধু রংপুর নয়, পুরো উত্তরাঞ্চলের মানুষের জন্য অত্যন্ত গুরুত্বপূর্ণ
              একটি স্বাস্থ্যসেবা কেন্দ্র। এটি আধুনিক চিকিৎসা সরঞ্জাম, উন্নত
              প্রযুক্তি এবং অভিজ্ঞ চিকিৎসক ও নার্সিং টিমের মাধ্যমে রোগীদের সেবা
              প্রদান করে থাকে। হাসপাতালে বিভিন্ন বিশেষায়িত বিভাগ যেমন মেডিসিন,
              সার্জারি, গাইনোকোলজি, পেডিয়াট্রিকস, অর্থোপেডিকস, কার্ডিওলজি,
              হেপাটোলজি এবং নিউরোলজির মতো ক্ষেত্রে উন্নতমানের চিকিৎসা সেবা দেওয়া
              হয়। প্রতিদিন অসংখ্য রোগী এখানে সেবা গ্রহণ করে এবং বিভিন্ন জটিল
              রোগের জন্য বিশেষায়িত চিকিৎসা লাভ করে। এই হাসপাতালটি চিকিৎসা
              শিক্ষার ক্ষেত্রেও অগ্রগণ্য ভূমিকা পালন করে, যেখানে ভবিষ্যৎ
              চিকিৎসকরা তাদের শিক্ষার পাশাপাশি প্র্যাকটিক্যাল অভিজ্ঞতা অর্জন
              করেন। রোগীদের জন্য উন্নতমানের চিকিৎসা ও সেবামূলক পরিবেশ তৈরি করে,
              রংপুর মেডিকেল কলেজ হাসপাতাল উত্তরাঞ্চলের মানুষের আস্থার
              কেন্দ্রবিন্দু হিসেবে পরিচিত।
            </p>
          </div>
        </div>
        <div>
            <h1 className="mt-3 ml-2 text-[20px] font-semibold mb-2">সেবা সমূহ:</h1>
            
            <div className="ml-3 ">
                <ul role="list" className="pl-3 space-x-2 list-disc marker:text-green-500 text-slate-600">
                    <li className="ml-2">২৪/৭ ঘণ্টার জরুরি সেবা</li>
                    <li>ডেঙ্গু কর্নার</li>
                    <li>ডায়ালিসিস কর্নার</li>
                    <li>নবজাতক বিশেষ যত্ন ইউনিট</li>
                    <li>উন্নত অপারেশন থিয়েটার</li>
                    <li>ঔষধ কর্নার</li>
                    <li>প্রার্থনা কর্নার</li>
                    <li>ক্যাফেটেরিয়া কর্নার</li>
                    <li>পার্কিং এলাকা</li>
                    <li>বড় বসার এলাকা এবং আলাদা আলাদা টয়লেট</li>
                </ul>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default DetailsOneHospitals;
