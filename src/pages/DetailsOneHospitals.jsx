
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
                        <img src="../../img/rangpurmedi.jpg" alt="Rangpur Medical Hospital" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">রংপুর মেডিকেল কলেজ হাসপাতাল</h2>
                        <p className="text-sm text-gray-500">মেডিকেল কলেজ রোড, রংপুর</p>
                    </div>
                </section>
            </div>
        );
    }


export default DetailsOneHospitals;