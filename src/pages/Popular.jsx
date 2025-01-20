import { NavLink } from "react-router";


const Popular = () => {
    return (
        <div className="max-w-md m-3 mx-auto">
        {/* back button */}
        <NavLink
          to="/hospitals"
          className="inline-flex px-2 py-1 mb-4 text-lg font-semibold text-green-500 dark:text-white"
        >
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
        </NavLink>

        {/* hospital details start here */}
        <section>
          <div>
            <img
              src="../../img/popular.jpg"
              alt="Rangpur Medical Hospital"
              className="w-full h-auto "
            />
          </div>

          <div className="m-2">
            <h2 className="text-xl font-semibold">
              পপুলার ডায়াগনস্টিক সেন্টার , রংপুর
            </h2>
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
                  <span className="font-bold">স্থান: </span>৭৭/১, রোড নং-১, ডিএইচপি, জেল রোড, রংপুর।
                </h3>
              </div>

              {/* contact info */}
              <h3 className="ml-3 mb-2 font-semibold text-[20px]">
                যোগাযোগ করুন :
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
                <p></p>
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
                <p>+880 9666 787801</p>
              </div>
            </div>
            <br />
          </div>
          <div>
            <h2 className="ml-3 text-[20px] font-semibold">
              হাসপাতাল সম্পর্কে:
            </h2>
            <div className="m-1">
              <p className="p-2 border border-gray-400 rounded-lg shadow-lg">
              পপুলার ডায়াগনস্টিক সেন্টার লিমিটেড বাংলাদেশের একটি সুপরিচিত স্বাস্থ্যসেবা প্রতিষ্ঠান, যা ১৯৮৩ সালে প্রতিষ্ঠিত হয়। এটি উন্নতমানের ডায়াগনস্টিক সেবা প্রদান, পরামর্শমূলক চিকিৎসা এবং আধুনিক প্রযুক্তি ব্যবহার করে রোগ নির্ণয়ে গুরুত্বপূর্ণ ভূমিকা পালন করে। পপুলার ডায়াগনস্টিক সেন্টার সিটি স্ক্যান, এমআরআই, আল্ট্রাসনোগ্রাফি, এক্স-রে এবং প্যাথলজি পরীক্ষার মতো অত্যাধুনিক সেবা প্রদান করে। তাদের শাখাগুলি দেশের বিভিন্ন স্থানে ছড়িয়ে রয়েছে, যেমন ঢাকা, চট্টগ্রাম, রাজশাহী, রংপুর, খুলনা ইত্যাদি। এই প্রতিষ্ঠান রোগীদের স্বাস্থ্য সুরক্ষায় সর্বোচ্চ মানের সেবা প্রদানের লক্ষ্যে কাজ করে।
                
              </p>
            </div>
          </div>
          <div>
            <h1 className="mt-3 ml-2 text-[20px] font-semibold mb-2">
              সেবা সমূহ:
            </h1>

            <div className="ml-3 ">
                <p className="mb-3 mr-1 text-gray-600">পপুলার ডায়াগনস্টিক সেন্টার রোগীদের নির্ভুল, দ্রুত এবং মানসম্মত সেবা প্রদানের জন্য সর্বদা প্রতিশ্রুতিবদ্ধ:</p>
              <ul
                role="list"
                className="pl-3 space-x-2 list-disc marker:text-green-500 text-slate-600"
              >
                <li className="ml-2">কলোনোস্কোপি</li>
                <li>ক্লিনিক্যাল প্যাথলজি</li>
                <li>কার্ডিয়াক টেস্ট</li>
                <li>ইমেজিং সেবা (এক্স-রে, আল্ট্রাসনোগ্রাফি ইত্যাদি)</li>
                <li>এন্ডোস্কোপি</li>
                <li>ক্যান্সার স্ক্রিনিং</li>
                <li>কোভিড-১৯ পিসিআর টেস্ট</li>
                <li>উচ্চমানের সেবা ও নির্ভুল পরীক্ষার ফলাফল।</li>
                <li>অভিজ্ঞ ও বিশেষজ্ঞ ডাক্তারদের পরামর্শ।</li>
                <li>রোগীদের সন্তুষ্টি ও স্বাচ্ছন্দ্য নিশ্চিতকরণ।</li>
                <li>স্বাস্থ্য পরীক্ষা প্যাকেজ</li>
                <li>ফার্মেসি সেবা</li>
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

export default Popular;