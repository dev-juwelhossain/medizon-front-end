const DetailsOneDoctors = () => {
  return (
    <div className="max-w-md m-2 mx-auto mb-2 ">
      {/* BAck Button */}

      <div className="flex">
        <div className="flex m-2">
          <a href="#">
            <svg
              className="w-6 h-6 text-green-500 dark:text-white"
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
          <h2 className="font-semibold text-green-500">ডাক্তারের তথ্য </h2>
        </div>

        {/*####Share & Favourite Icon ####*/}

        <div className="flex m-2 ml-auto space-x-2">
          <a href="#">
            {/* Favourite Icon */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
            </svg>
          </a>

          {/* Share SVG icon */}
          <a href="#">
            {/* Share SVG */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Doctor Details */}

      {/* Doctors Image */}
      <div className="flex">
        <div className=" m-2 overflow-hidden rounded-[8px] doctor-info">
          <img src="../img/doctor.jpg" alt="" />
          <p>অভিজ্ঞতা: ২০+ বছর</p>
        </div>

        {/* Doctors Name Deatils */}
        <div className="mt-3 ml-1">
          <h2 className="text-xl font-semibold">ডা. লাইক আহমেদ খান</h2>
          <p className="text-sm text-gray-500">এমবিবিএস, এফসিপিএস (মেডিসিন)</p>
          <div className="h-auto mt-1 font-medium text-center text-white bg-blue-700 rounded-sm w-15 doctor-button ">
            <p>মেডিসিন(Medicine)</p>
          </div>
        </div>
      </div>

      {/* Doctor's Information */}
      <div className="ml-3">
        <p className="text-sm text-gray-500 ">কর্মস্থল</p>
        <p>রংপুর মেডিকেল কলেজ হাসপাতাল</p>
      </div>

      {/* Doctor's Information */}
      <div className="mt-10 ">
        <h4 className="px-3 mx-3 ml-3 font-semibold text-center text-green-500 rounded-lg shadow-md bg-gray-50">
          তথ্য ও অভিজ্ঞতা{" "}
        </h4>
      </div>

      {/* informaton*/}
      <br />
      <br />

      <div className="inline-flex px-2 py-1 mb-4 text-lg font-semibold text-green-500 dark:text-white">
        <svg
          className="text-green-500 h-7 w-7 dark:text-white"
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
            d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
          />
        </svg>
        <h4 className="px-2 text-black">এপয়েন্টমেন্ট এর সময় :</h4>
      </div>
      <div className="ml-3">
        <ul
          role="list"
          className="pl-5 space-y-3 list-disc marker:text-green-400 text-slate-500"
        >
          <li>দিন : (শনি-বৃহস্পতিবার)</li>
          <li>সময় : (বিকাল ০৪.০০ - রাত ১০.০০) </li>
          <li>
            স্থান : (রংপুর মেডিকেল কলেজ হাসপাতাল, Rangpur- Dinajpur Highway,
            Cantt, Near Central Jail, রংপুর 5400)
          </li>
        </ul>
      </div>
      <div className="inline-flex mt-3 ml-4 font-semibold">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
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
            d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
          />
        </svg>
        <p>পরামর্শ ফি- ৮০০/-</p>
      </div>
      {/* contact info */}
      <div>
        <h3 className="ml-3 mb-2 font-semibold text-[20px]">যোগাযোগ করুন</h3>
        <div className="flex items-center mb-2 ml-3 space-x-1">
          <svg
            className="w-[24px] h-[24px] text-gray-800 dark:text-white text-black border border-black rounded-xl"
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
            className="w-[24px] h-[24px] text-black border border-black rounded-xl dark:text-white"
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
        <br />
        <div>
          <h2 className="ml-2 text-[20px] font-bold ">ডাক্তার সম্পর্কে :</h2>
          <br />
          <p className="p-2 ml-1 mr-1 text-white rounded-lg shadow-lg bg-slate-900 text-start ">
            ডা. লাইক আহমেদ খান একজন অভিজ্ঞ মেডিসিন বিশেষজ্ঞ, যিনি ২০ বছরেরও বেশি
            সময় ধরে রোগীদের চিকিৎসা দিয়ে আসছেন। তিনি এমবিবিএস এবং এফসিপিএস
            (মেডিসিন) ডিগ্রিধারী এবং বর্তমানে রংপুর মেডিকেল কলেজ হাসপাতালে
            কর্মরত। দীর্ঘমেয়াদি রোগের ব্যবস্থাপনা, ডায়াবেটিস, উচ্চ রক্তচাপ,
            হেপাটোলজি এবং অন্যান্য জটিল চিকিৎসার ক্ষেত্রে তাঁর বিশেষ দক্ষতা
            রয়েছে। ডা. লাইক আহমেদ খান মেডিকেল চেকআপ, ডায়াগনোসিস, রোগ
            প্রতিরোধমূলক পরামর্শ এবং উন্নতমানের চিকিৎসার মাধ্যমে অসংখ্য রোগীকে
            সুস্থ করেছেন। তিনি দেশি ও আন্তর্জাতিক বিভিন্ন মেডিকেল সেমিনার এবং
            প্রশিক্ষণে অংশগ্রহণ করে সর্বশেষ চিকিৎসা পদ্ধতিতে নিজেকে আপডেট
            রেখেছেন। রোগীদের সাথে বন্ধুত্বপূর্ণ আচরণ, সঠিক রোগ নির্ণয়ের তীক্ষ্ণ
            নজর এবং উন্নত ব্যবস্থাপনায় তিনি রোগীদের মধ্যে আস্থার জায়গা তৈরি
            করেছেন। তাঁর মানবিকতা এবং চিকিৎসার দক্ষতা তাঁকে একজন শ্রদ্ধাভাজন
            চিকিৎসক হিসেবে পরিচিত করেছে।
          </p>
        </div>
        <br />
        
        {/* experiences */}
        <h1 className="ml-3 mb-2 font-semibold text-[20px]">
          অভিজ্ঞতা :
        </h1>
        {/* exp card start here */}
        
        <div className="m-3 border border-gray-300 rounded-lg shadow-lg bg-gray-50">
          <h1 className="pt-1 mt-1 ml-2 ">রংপুর মেডিকেল কলেজ হাসপাতাল</h1>
          <div className="flex justify-between px-3 py-2">
            <div>
              <p className="text-[12px] text-slate-500">পদবী</p>
              <p>এফসিপিএস (মেডিসিন)</p>
            </div>
            <div>
              <p className="text-[12px] text-slate-500">অভিজ্ঞতার সময়কাল</p>
              <p>আট বছর</p>
            </div>
          </div>
        </div>

        {/* exp card -2 */}
       
        <div className="m-3 border border-gray-300 rounded-lg shadow-lg bg-gray-50">
          <h1 className="pt-1 mt-1 ml-2 ">রংপুর মেডিকেল কলেজ হাসপাতাল</h1>
          <div className="flex justify-between px-3 py-2">
            <div>
              <p className="text-[12px] text-slate-500">পদবী</p>
              <p>এফসিপিএস (মেডিসিন)</p>
            </div>
            <div>
              <p className="text-[12px] text-slate-500">অভিজ্ঞতার সময়কাল</p>
              <p>আট বছর</p>
            </div>
          </div>
        </div>
        {/* exp card -3 */}
        
        <div className="m-3 border border-gray-300 rounded-lg shadow-lg bg-gray-50">
          <h1 className="pt-1 mt-1 ml-2 ">রংপুর মেডিকেল কলেজ হাসপাতাল</h1>
          <div className="flex justify-between px-3 py-2">
            <div>
              <p className="text-[12px] text-slate-500">পদবী</p>
              <p>এফসিপিএস (মেডিসিন)</p>
            </div>
            <div>
              <p className="text-[12px] text-slate-500">অভিজ্ঞতার সময়কাল</p>
              <p>আট বছর</p>
            </div>
          </div>
        </div>
        {/* exp card -4 */}
        <div className="m-3 border border-gray-300 rounded-lg shadow-lg bg-gray-50">
          <h1 className="pt-1 mt-1 ml-2 ">রংপুর মেডিকেল কলেজ হাসপাতাল</h1>
          <div className="flex justify-between px-3 py-2">
            <div>
              <p className="text-[12px] text-slate-500">পদবী</p>
              <p>এফসিপিএস (মেডিসিন)</p>
            </div>
            <div>
              <p className="text-[12px] text-slate-500">অভিজ্ঞতার সময়কাল</p>
              <p>আট বছর</p>
            </div>
          </div>
        </div>
        
      </div>
      <br />
      <br />
      <br />
      
      
    </div>
  );
};

export default DetailsOneDoctors;
