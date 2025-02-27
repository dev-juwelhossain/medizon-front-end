import { NavLink } from "react-router-dom"; // Fix the import
import axios from "axios";
import { useEffect, useState } from "react";
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

const ExpertDoctors = (id) => {
  const [doctors, setDoctors] = useState();
  const [loading, setLoading] = useState(true); // Add loading state
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Fetch doctors data
    axios
      .get(`${BASE_URL}/doctors`)
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false when the request is done
      });
  }, [id]);

  // Show preloader while loading
  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="max-w-md mb-[70px] m-3 mx-auto">
      {/* Back button */}
      <NavLink
        to="/doctors"
        className="inline-flex items-center px-2 py-1 mb-4 text-lg font-semibold text-green-500"
      >
        <svg
          className="text-green-500"
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
        <h3 className="">বিশেষজ্ঞ ডাক্তার তালিকা</h3>
      </NavLink>

      {/* Favourite Doctors */}
      <div className="popular-doctors">
        <h2 className="mb-2 ml-2 text-[18px] font-medium">বিশেষজ্ঞ ডাক্তাররা</h2>
      </div>

      {/* Doctors List */}
      {doctors?.map((item) => (
        <div key={item.id} className="m-2 mb-2 doctor-profile">
          <div className="w-100% border flex gap-4 rounded-sm shadow-lg p-4 bg-white">
            <div className="doctor-info">
              <img
                src={`http://127.0.0.1:8000/admin/doctors/${item.doctor_img}`}
                alt=""
              />
              <div>
                <p className="mt-2 text-center">অভিজ্ঞতা: {item.experience} বছর</p>
                <p className="text-[15px] mt-1">কনসালটেশন ফি: {item.consultation_fee} ৳</p>
              </div>
            </div>

            <div className="doctor-name">
              <h2>{item.name}</h2>
              <div className="w-fit h-auto px-2 mt-1 mb-1 text-center text-white bg-green-500 rounded-sm doctor-button">
                <p>{item.specialized}</p>
              </div>
              <p>{item.degree}</p>
              <p>{item.e_degree}</p>
              <p className="font-bold">{item.hospital}</p>
              <p>
                <span className="font-bold">চেম্বার: </span> {item.address}
              </p>

              <div className="text-[12px]">
                <NavLink
                  to={`/details-one-doctors/${item.id}`}
                  className="inline-flex items-center float-start mt-3 px-[5px] py-[3px] font-normal text-center text-black bg-slate-50 rounded-md text-[10px] hover:shadow-lg"
                >
                  বিস্তারিত
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#0e9f6e"
                    className="float-right"
                  >
                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpertDoctors;