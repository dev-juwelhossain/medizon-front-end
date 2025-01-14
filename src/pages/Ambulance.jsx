const Ambulance = () => {
  return (
    <div className="max-w-md m-3 mx-auto">
      <div className="inline-flex px-2 mb-4 text-lg font-semibold text-green-500 dark:text-white">
        <a href="">
          <svg
            className="w-5 h-5 text-green-500 mt-[2px] dark:text-white"
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
        <h3 className="mb-4">অ্যাম্বুলেন্স তালিকা</h3>
      </div>
      {/* BP ambulance service */}
      
      <div className="mb-4 ml-1 mr-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="flex justify-center items-center h-[135px] w-full object-cover rounded-t-lg"
            src="../../img/bipi.jpg"
            alt=""
          />
        </a>
        <div className="px-2 py-3">
          <div>
            <h2 className="text-[15px] font-bold">
              রংপুর বিপি অ্যাম্বুলেন্স সার্ভিস
            </h2>
            <p className="text-[15px] m-1 "> +৮৮০-১৭১৫৭৭৩৩৮২</p>
            <p className="text-[14px] m-1">রংপুর সিটি</p>
          </div>
          
        </div>
      </div>
      {/* LABAID Diagnostic Rangpur */}
       
      <div className="mb-4 ml-1 mr-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="flex justify-center items-center h-[135px] w-full object-cover rounded-t-lg"
            src="../../img/bipi.jpg"
            alt=""
          />
        </a>
        <div className="px-2 py-3">
          <div>
            <h2 className="text-[15px] font-bold">
              ল্যাব এইড ডায়াগনস্টিক সেন্টার আম্বুলেন্স সার্ভিস
            </h2>
            <p className="text-[15px] m-1 "> +৮৮০-১৭৬৬-৬৬৩০৯৯ </p>
            <p className="text-[14px] m-1">সেতুবন্ধন, বাড়ি-৬৯,রোড,রংপুর–দিনাজপুর হাইওয়ে, রংপুর
          
            </p>
          </div>
          
        </div>
      </div>

      {/* Update Ambulance Service */}
      
      <div className="mb-4 ml-1 mr-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="flex justify-center items-center h-[135px] w-full object-cover rounded-t-lg"
            src="../../img/bipi.jpg"
            alt=""
          />
        </a>
        <div className="px-2 py-3">
          <div>
            <h2 className="text-[15px] font-bold">
              আপডেট আম্বুলেন্স সার্ভিস
            </h2>
            <p className="text-[15px] m-1 "> +৮৮০-১৯৭১-৫৫৫৫৫৫ </p>
            <p className="text-[14px] m-1">দিনাজপুর হাইওয়ে, রংপুর</p>
          </div>
          
        </div>  
      </div>
      
      {/* desh clinic ambulance service */}

      <div className="mb-20 ml-1 mr-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="flex justify-center items-center h-[135px] w-full object-cover rounded-t-lg"
            src="../../img/bipi.jpg"
            alt=""
          />
        </a>
        <div className="px-2 py-3">
          <div>
            <h2 className="text-[15px] font-bold">
            দেশ ক্লিনিক অ্যাম্বুলেন্স সার্ভিস
            </h2>
            <p className="text-[15px] m-1 "> ০৫২১ ৬৩৩৫০, ০৫২১ ৬৫৫৫৫ </p>
            <p className="text-[14px] m-1">দিনাজপুর হাইওয়ে, রংপুর</p>
          </div>
          
        </div>  
      </div>
    
    </div>
  );
};

export default Ambulance;
