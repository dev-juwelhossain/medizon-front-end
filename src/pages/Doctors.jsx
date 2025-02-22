import { NavLink } from "react-router-dom"; // Fix the import
import "./css/Secondary.css";
import DoctorSlider from "../component/DoctorSlider";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
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

const Doctors = () => {
  const [doctors, setDoctors] = useState();
  const [loading, setLoading] = useState(true); // Add loading state
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Fetch doctors data
    axios
      .get(`${BASE_URL}/doctors`)
      .then((response) => {
        setDoctors(response.data.slice(0, 2));
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
        className="inline-flex items-center px-1 py-1 mb-3 text-lg font-semibold text-green-500 dark:text-white"
      >
        <div>
          <svg
            className="text-green-500 dark:text-white"
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
        </div>
        <h3 className="">ডাক্তার তালিকা</h3>
      </NavLink>

      {/* Recommended Doctors List */}
      <div className="overflow-hidden bg-white shadow-sm">
        <DoctorSlider />
      </div>

      {/* Specialized Doctors */}
      <NavLink to="/expert-doctors" className="popular-doctors">
        <h2 className="mt-3 ml-2 text-green-500">বিশেষজ্ঞ ডাক্তাররা</h2>
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

      {/* Doctor Cards */}
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
              <div className="w-20 h-auto mt-1 mb-1 text-center text-white bg-green-500 rounded-sm doctor-button">
                <p>{item.specialized}</p>
              </div>
              <p>{item.degree}</p>
              <p>{item.e_degree}</p>
              <p className="font-bold">{item.hospital}</p>
              <p>
                <span className="font-bold">চেম্বার: </span> {item.address}
              </p>

              <NavLink
                to={`/details-one-doctors/${item.id}`}
                className="text-[12px]"
              >
                <div className="inline-flex items-center float-start mt-3 px-[5px] py-[3px] font-normal text-center text-black bg-slate-50 rounded-md text-[10px] hover:shadow-lg">
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
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      ))}

      {/* Favourite Doctors */}
      <NavLink to="/doctor-details" className="popular-doctors">
        <h2 className="mt-3 ml-2 text-green-500">প্রিয় ডাক্তাররা</h2>
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

      {/* Doctor Cards */}
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
              <div className="w-20 h-auto mt-1 mb-1 text-center text-white bg-green-500 rounded-sm doctor-button">
                <p>{item.specialized}</p>
              </div>
              <p>{item.degree}</p>
              <p>{item.e_degree}</p>
              <p className="font-bold">{item.hospital}</p>
              <p>
                <span className="font-bold">চেম্বার: </span> {item.address}
              </p>

              <NavLink
                to={`/details-one-doctors/${item.id}`}
                className="text-[12px]"
              >
                <div className="inline-flex items-center float-start mt-3 px-[5px] py-[3px] font-normal text-center text-black bg-slate-50 rounded-md text-[10px] hover:shadow-lg">
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
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      ))}

      {/* Department of Doctors */}
      <div id="popular-doctors" className="popular-doctors">
        <h2 className="mt-6">বিভাগ অনুযায়ী ডাক্তার</h2>
      </div>

      {/* Department List */}
      <section className="flex items-center justify-between">
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/neurologist (1).png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              নিউরোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/urology.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              ইউরোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/physician.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              কার্ডিওলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/gastroenterology.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              গ্যাস্ট্রোরোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/physiotherapist.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              ফিজিওথেরাপি
            </p>
          </a>
        </div>
      </section>

      {/* 2nd Department of Doctor */}
      <section className="flex items-center justify-between">
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/medicine.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              মেডিসিন
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/pediatrics.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              শিশু বিভাগ
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/orthopedics.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              অর্থোপেডিক্স
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/psychiatry.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              সাইকিয়াট্রিস্ট
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/dermatology.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              ডার্মাটোলজি
            </p>
          </a>
        </div>
      </section>

      {/* Department Three */}
      <section className="flex items-center justify-between">
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/maternity.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              গাইনোকোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/red-eye.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              অফথালমোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/cancer.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              অনকোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/endocrine.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              এন্ডোক্রাইনোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/nephrology.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              নেফ্রোলজি
            </p>
          </a>
        </div>
      </section>

      {/* Department Four Number Row */}
      <section className="flex items-center justify-between mb-20">
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/maternity.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              ডায়াবেটোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/red-eye.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              অফথালমোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/cancer.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              অনকোলজি
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/endocrine.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              ডেন্টিস্ট
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              className="mt-2 h-[60px] w-[60px] bg-white border p-1 rounded-sm hover:bg-gray-200"
              src="img/nephrology.png"
              alt=""
            />
            <p className="text-[10px] mt-1 hover:text-green-600 text-center">
              হোমিওপ্যাথি
            </p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Doctors;