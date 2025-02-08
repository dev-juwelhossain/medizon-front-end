import { NavLink } from "react-router";
import HospitalSlide from "./HosSlider";
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

const Hospitals = () => {
  const [hospital, setHospital] = useState();
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/hospital`)
      .then((response) => setHospital(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-md m-2 mx-auto">
      {loading ? (
        <Preloader />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Back Button */}
          <NavLink
            to="/"
            className="inline-flex px-2 py-1 mb-2 text-lg font-semibold text-green-500 dark:text-white"
          >
            <a href="">
              <svg
                className="w-5 h-5 text-green-500 mt-[3px] dark:text-white"
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
            <h3 className="">হাসপাতাল তালিকা</h3>
          </NavLink>

          {/* Hospitals list */}
          <div className="bg-white overflow-hidden">
            <HospitalSlide />
          </div>

          {/* Hospital Cards */}
          <section className="grid grid-cols-2 object-contain items-center">
            {hospital?.map((item) => (
              <motion.div
                key={item.id}
                className="m-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
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
                    <p className="text-[13px] m-1 ">{item.phone_number}</p>
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
              </motion.div>
            ))}
          </section>

          <br />
          <br />
          <br />
        </motion.div>
      )}
    </div>
  );
};

export default Hospitals;
