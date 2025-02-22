import { NavLink } from "react-router-dom"; // Fix the import
import DoctorSlider from "../component/DoctorSlider";
import "./css/Primary.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion

// Smooth Preloader Component
const Preloader = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="w-12 h-12 border-4 border-t-green-500 border-gray-300 rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      ></motion.div>
      <p className="mt-3 text-gray-600 text-lg">লোড হচ্ছে...</p>
    </motion.div>
  );
};

const Home = () => {
  const [ambulance, setAmbulance] = useState();
  const [hospital, setHospital] = useState();
  const [loading, setLoading] = useState(true); // Add loading state
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Fetch ambulance data
    axios
      .get(`${BASE_URL}/ambulance`)
      .then((response) => {
        setAmbulance(response.data.slice(0, 2));
      })
      .catch((error) => {
        console.log(error);
      });

    // Fetch hospital data
    axios
      .get(`${BASE_URL}/hospital`)
      .then((response) => {
        setHospital(response.data.slice(0, 2));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false when both requests are done
      });
  }, []);

  // Show preloader while loading
  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="m-2 mb-[70px] max-w-md mx-auto">
      {/* Intro Video Here */}
      <div className="intro-video @media screen and (max-width: 800px) m-2">
        <iframe
          style={{ borderRadius: "6px" }}
          width="100%"
          height="200px"
          src="https://www.youtube.com/embed/wBrm5Xfu9UU?si=F2RyQW2Q9hIUbelr"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Recommended doctors */}
      <NavLink to="/doctor-details" className="recommended-doctors">
        <h3 className="mt-2 text-[15px] text-green-500">প্রিয় ডাক্তার সমূহ</h3>
        <div className="flex items-center justify-between m-2 mt-3">
          <h2 className="mx-1 text-[13px] text-green-500">আরো দেখুন</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#0e9f6e"
            className="float-right"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
      </NavLink>

      {/* Recommended doctors cards carousel */}
      <div className="m-2 overflow-hidden bg-white">
        <DoctorSlider />
      </div>

      {/* Recommended hospitals */}
      <NavLink to="/hospitals" className="recommended-doctors">
        <h3 className="mt-2 text-[15px] text-green-500">সুপারিশকৃত হাসপাতাল সমুহ</h3>
        <div className="flex items-center justify-between m-2 mt-3">
          <h2 className="mx-1 text-[13px] text-green-500">আরো দেখুন</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#0e9f6e"
            className="float-right"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
      </NavLink>

      {/* Hospital Cards */}
      <section className="grid grid-cols-2 object-contain items-center">
        {hospital?.map((item) => (
          <div key={item.id} className="m-2">
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="items-center object-cover object-center h-[150px] w-auto rounded-sm"
                  src={`http://127.0.0.1:8000/admin/hospitals/${item.hospital_picture}`}
                  alt=""
                />
              </a>
              <div className="px-2 py-3">
                <h2 className="text-[14px] font-bold">{item.name}</h2>
                <p className="text-[13px] m-1">{item.phone_number}</p>
                <p className="text-[13px] m-1">{item.location}</p>
                <NavLink
                  to={`/details-one-hospitals/${item.id}`}
                  className="inline-flex items-center px-2 mt-2 font-normal text-center text-black bg-white rounded-md text-[13px] hover:shadow-md"
                >
                  বিস্তারিত
                  <svg
                    className="w-4 h-5 pb-[2px] text-green-500 dark:text-white"
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
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Recommended ambulance */}
      <div className="recommended-ambulance">
        <h2 className="mt-2 mb-2 text-[15px] text-green-500">সুপারিশকৃত অ্যাম্বুলেন্স সমুহ</h2>
        <NavLink to="/ambulance" className="flex items-center justify-between m-2 mt-3">
          <h2 className="mx-2 text-[14px] text-green-500">আরো দেখুন</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="22px"
            viewBox="0 -960 960 960"
            width="22px"
            fill="#0e9f6e"
            className="float-right"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </NavLink>
      </div>

      {/* Ambulance Cards */}
      <section className="grid grid-cols-2 object-contain items-center">
        {ambulance?.map((item) => (
          <div key={item.id} className="m-2">
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="items-center object-cover object-center h-[140px] w-[100%] rounded-sm"
                  src={`http://127.0.0.1:8000/admin/ambulance/${item.ambulance_picture}`}
                  alt=""
                />
              </a>
              <div className="px-2 py-2">
                <h2 className="text-[14px] font-bold">{item.name}</h2>
                <p className="text-[12px] m-1">{item.phone_number}</p>
                <p className="text-[12px] m-1">{item.location}</p>
                <a
                  href={`tel:${item.phone_number}`}
                  className="inline-flex items-center px-2 mt-2 font-normal text-center text-black bg-white rounded-md text-[13px] hover:shadow-md"
                >
                  যোগাযোগ করুন
                  <svg
                    className="w-4 h-5 pb-[2px] text-green-500 dark:text-white"
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
        ))}
      </section>

      {/* Department of Doctors */}
      <NavLink to="/doctors" className="recommended-doctors">
        <h3 className="mt-2 text-[15px] text-green-500">বিভাগ অনুযায়ী ডাক্তার সমূহ</h3>
        <div className="flex items-center justify-between m-2 mt-3">
          <h2 className="mx-1 text-[13px] text-green-500">আরো দেখুন</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#0e9f6e"
            className="float-right"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
      </NavLink>

      {/* Department Icons */}
      <section className="flex items-center justify-between m-2 mb-">
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/neurologist (1).png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">নিউরোলজি</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/urology.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">ইউরোলজি</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/physician.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">কার্ডিওলজি</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/gastroenterology.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">গ্যাস্ট্রোরোলজি</p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/physiotherapist.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">ফিজিওথেরাপি</p>
          </a>
        </div>
      </section>
      <br />
    </div>
  );
};

export default Home;