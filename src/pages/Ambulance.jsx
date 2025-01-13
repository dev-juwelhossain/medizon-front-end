const Ambulance = () => {
  return (
    <div className="max-w-md m-3 mx-auto">
      <div className="inline-flex px-2 mb-4 space-x-2 text-lg font-semibold text-green-500 dark:text-white">
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
        <h3>অ্যাম্বুলেন্স তালিকা</h3>
      </div>
    </div>
  );
};

export default Ambulance;
