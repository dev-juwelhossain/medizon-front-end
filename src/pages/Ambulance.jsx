import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Fix the import
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

const Ambulance = () => {
  const [ambulance, setAmbulance] = useState();
  const [loading, setLoading] = useState(true); // Add loading state
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Fetch ambulance data
    axios
      .get(`${BASE_URL}/ambulance`)
      .then((response) => {
        setAmbulance(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false when the request is done
      });
  }, []);

  // Show preloader while loading
  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="max-w-md m-3 mx-auto">
      {/* Back button */}
      <NavLink
        to="/"
        className="inline-flex items-center mb-4 text-lg font-semibold text-green-500 dark:text-white"
      >
        <svg
          className="text-green-500 dark:text-white"
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
        <h3 className="">অ্যাম্বুলেন্স তালিকা</h3>
      </NavLink>

      {/* Ambulance Cards */}
      <section className="grid grid-cols-2 object-contain">
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
                <a href="#">
                  <h2 className="text-[14px] font-bold">{item.name}</h2>
                  <p className="text-[12px] m-1">{item.phone_number}</p>
                  <p className="text-[12px] m-1">{item.location}</p>
                </a>
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

      <br /><br /><br />
    </div>
  );
};

export default Ambulance;