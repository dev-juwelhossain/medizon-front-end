import { NavLink } from "react-router";

const Settings = () => {
  return (
    <div className="m-2 mb-[70px] max-w-md mx-auto">
     
      {/* back button  */}
      <NavLink to='/' className="inline-flex px-1 py-1 mb-3 mt-2 text-lg font-semibold text-green-500 dark:text-white">
        <a href="">
          <svg
            className="w-5 h-5 text-green-500 mt-[3px] dark:text-white"
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
        <h3 className="">ফিরে যান</h3>
      </NavLink>
      <br />
      <br />
      {/* middle section */}
      <section>
        {/* settings */}
        <div className="flex items-center mb-3 ml-2">
          <svg
            className="text-gray-600 h-9 w-9 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="square"
              strokeLinejoin="round"
              strokeWidth="1.2"
              d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>

          <h1 className="pl-2 text-[20px] text-gray-800 font-normal">
            Settings (সেটিংস)
          </h1>
        </div>
        {/* help */}
        <div className="flex items-center mt-2 mb-3 ml-2">
          <svg
            className="text-gray-600 h-9 w-9 dark:text-white"
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
              strokeWidth="1.1"
              d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <h1 className="text-[21px] font-normal pl-2 text-gray-800">
            Help (সাহায্য)
          </h1>
        </div>
        {/* feedback */}
        <div className="flex items-center mt-2 ml-2">
          <svg
            className="text-gray-600 w-9 h-9 dark:text-white"
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
              strokeWidth="1.1"
              d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
            />
          </svg>
          <h1 className="text-[20px] font-normal text-gray-800 ml-1">Feedback (ফিডব্যাক)</h1>
        </div>
        {/* privacy */}
        <div className="flex items-center mt-2 ml-2">
          <svg
            className="text-gray-600 h-9 w-9 dark:text-white"
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
              strokeWidth="1.1"
              d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
            />
          </svg>

          <h1 className="text-[20px] font-normal text-gray-800 ml-2">Privacy (গোপনীয়তা)</h1>
        </div>

        {/* about */}
        <div className="flex items-center mt-2 ml-2">
          <svg
            className="text-gray-600 h-9 w-9 dark:text-white"
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
              strokeWidth="1.1"
              d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1 className="text-[20px] ml-2 font-normal text-gray-800">About (সম্পর্কে)</h1>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1 className="text-center text-gray-500">
          © Medizone - 2025 | V.1.0{" "}
        </h1>
      </div>
    </div>
  );
};

export default Settings;
