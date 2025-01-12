import { Carousel } from "flowbite-react";
import DoctorSlider from "../component/DoctorSlider";
import "./css/Primary.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home = () => {
  return (
    <div className="m-2 mb-[70px]">
      {/* ################### Start code here ##########################*/}

      {/* Intro Video Here */}
      <div className="intro-video @media screen and (max-width: 800px)">
        <iframe
          width="100%"
          height="200px"
          src="https://www.youtube.com/embed/eHJnEHyyN1Y"
          title="6 Tips on Being a Successful Entrepreneur | John Mullins | TED"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      {/* Recommended doctors  */}
      <div className="recommended-doctors">
        <h2 className="mt-2 text-[13px]">Recommended Doctors</h2>
        <div className="flex items-center justify-between m-2 mt-3">
          <h2 className="mx-2 text-[13px] ">View All</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#ffffff"
            className="float-right bg-green-500 rounded-full"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
      </div>
      {/* Recommended doctors cards carousel*/}

      <DoctorSlider />

      {/*   <section className="flex items-center justify-center ">
        <div className="">
         
          <div className="doctor-profile">
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
                <p className="text-[15px] mt-1">
                  রংপুর মেডিকেল কলেজ ও হাসপাতাল
                </p>
                <div className="mt-3 text-[12px]">
                  <a
                    href="#"
                    className="inline-flex items-center float-end mt-5 px-[2px] py-[2px] font-normal text-center text-black  bg-white border border-black rounded-md text-[10px] hover:bg-green-500 hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
                  >
                    বিস্তারিত
                    <svg
                      className="w-2 h-2 rtl:rotate-180 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* recommended hospitals */}

      <div className="recommended-hospitals">
        <h2 className="mt-2 text-[13px]">Recommended Hospitals</h2>
        <div className="flex items-center justify-between m-2 mt-3 -2">
          <h2 className="mx-2 text-[13px]">View All</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#ffffff"
            className="float-right text-green-500 bg-green-500 rounded-full"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
      </div>

      {/* Recommended hospitals cards carousel*/}

      <section className="flex items-center justify-center object-contain">
        <div className="m-2">
          {/* here is profile card 1 */}

          <div className="bg-white border border-gray-200 rounded-lg shadow] dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="items-center object-cover object-center h-[150px] w-auto"
                src="../../img/hospital.jpg"
                alt=""
              />
            </a>
            <div className="px-2 py-3">
              <a href="#">
                <h2 className="text-[14px] font-bold">
                  রংপুর মেডিকেল কলেজ হাসপাতাল
                </h2>
                <p className="text-[13px] m-1 "> +৮৮০-১৩১১২৩৪৫</p>
                <p className="text-[13px] m-1">ধাপ রোড , মেডিকেল মোড়</p>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 py-1 font-normal text-center text-black  bg-white border border-black rounded-lg text-[13px] hover:bg-green-500 hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
              >
                বিস্তারিত
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="m-2">
          {/* here is  profile card 2*/}

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="items-center object-cover object-center h-[150px] w-auto"
                src="../../img/hospital.jpg"
                alt=""
              />
            </a>
            <div className="px-2 py-3">
              <a href="#">
                <h2 className="text-[14px] font-bold">
                  রংপুর মেডিকেল কলেজ হাসপাতাল
                </h2>
                <p className="text-[13px] m-1 "> +৮৮০-১৩XXXXXXXX </p>
                <p className="text-[13px] m-1">ধাপ রোড , মেডিকেল মোড়</p>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 py-1 font-normal text-center text-black  bg-white border border-black rounded-lg text-[13px] hover:bg-green-500 hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
              >
                বিস্তারিত
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* recommended ambulance */}

      <div className="recommended-ambulance">
        <h2 className="mt-2 mb-2 text-[13px]">Recommended Ambulance</h2>
        <div className="flex items-center justify-between m-2 mt-3">
          <h2 className="mx-2 text-[13px]">View All</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#ffffff"
            className="float-right bg-green-500 rounded-full"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
      </div>

      {/* Recommended ambulance cards carousel*/}

      <section className="flex items-center justify-center object-contain">
        <div className="m-2">
          {/* here is ambulance profile card 1 */}

          <div className="bg-white border border-gray-200 rounded-lg shadow] dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="items-center object-cover object-center h-[140px] w-auto"
                src="../../img/ambulance.jpg"
                alt=""
              />
            </a>
            <div className="px-2 py-2">
              <a href="#">
                <h2 className="text-[14px] font-bold">মায়ের দোয়া এম্বুলেন্স</h2>
                <p className="text-[12px] m-1 ">০১৩XXXXXXXX </p>
                <p className="text-[12px] m-1">ধাপ রোড , মেডিকেল মোড়</p>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 py-1 font-normal text-center text-black  bg-white border border-gray-300 rounded-lg text-[13px] hover:bg-green-500 hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
              >
                যোগাযোগ করুন
                <svg
                  className="w-5 h-5 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="m-2">
          {/* here is ambulance profile card 2*/}

          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="items-center object-cover object-center h-[140px] w-auto"
                src="../../img/ambulance.jpg"
                alt=""
              />
            </a>
            <div className="px-2 py-2">
              <a href="#">
                <h2 className="text-[14px] font-bold">মায়ের দোয়া এম্বুলেন্স</h2>
                <p className="text-[13px] m-1 ">০১৩২৩৫৪০৬১</p>
                <p className="text-[13px] m-1">ধাপ রোড , মেডিকেল মোড়</p>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-1 py-1 font-normal text-center text-black  bg-white border border-gray-400 rounded-md text-[13px] hover:bg-green-500 hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-800"
              >
                যোগাযোগ করুন
                <svg
                  className="w-4 h-5 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  height="15px"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
