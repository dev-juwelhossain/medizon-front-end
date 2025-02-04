import { NavLink } from "react-router";
import HospitalSlide from "./HosSlider";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Hospitals = () => {
  const [hospital, setHospital] = useState()
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get(`${BASE_URL}/hospital`)
      .then(function (response) {
        // handle success
        setHospital(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  return (
    <div className="max-w-md m-2 mx-auto">
      {/* back button start here */}
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
      {/* Hospitals list*/}
      <div className="bg-white overflow-hidden">
        <HospitalSlide />
      </div>

      {/* 1st row */}

      <section className="grid grid-cols-2 object-contain items-center ">
        {/* here is profile card 1 */}
        {
          hospital?.map(item => {
            return (
              <>
                <div className="m-2">


                  <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img
                        className="items-center object-cover object-center h-[150px] w-auto rounded-sm"
                        src={`http://127.0.0.1:8000/admin/hospitals/${item.hospital_picture}`}
                        alt=""
                      />
                    </a>
                    <div className="px-2 py-3">
                      <div>
                        <h2 className="text-[14px] font-bold">
                         {item.name}
                        </h2>
                        <p className="text-[13px] m-1 "> {item.phone_number}</p>
                        <p className="text-[13px] m-1">{item.location}</p>
                      </div>
                      <NavLink to='/details-one-hospitals'
                        href="#"
                        className="inline-flex items-center px-2  mt-2 font-normal text-center text-black  bg-white rounded-md text-[13px] hover:shadow-md"
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
              </>
            )
          })
        }


      </section>


      <br />
      <br />
      <br />

    </div>
  );
};

export default Hospitals;
