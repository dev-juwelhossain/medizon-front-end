
import { NavLink } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

const DoctorsDetails = () => {
  const [doctors, setDoctors] = useState()
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get(`${BASE_URL}/doctors`)
      .then(function (response) {
        // handle success
        setDoctors(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  console.log(doctors);


  return (
    <div className="max-w-md mx-auto">
      {/* back button */}
      <NavLink to='/doctors' className="inline-flex items-center px-2 py-1 mb-4 text-md font-semibold text-green-500 dark:text-white">
        <a href="">
          <svg
            className=" text-green-500  dark:text-white"
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
        <h3 className=""> প্রিয় ডাক্তার তালিকা</h3>
      </NavLink>
      {/* Favourite Doctors */}
      <div className="popular-doctors">
        <h2 className="m-2 ml-3">প্রিয় ডাক্তাররা</h2>
      </div>

      {/* ##### Doctors List###### */}
      {
        doctors?.map(item => {
          return (
            <>

              <div className="m-2 mb-3 doctor-profile">
                <div className="w-100% border  flex  gap-4 rounded-sm shadow-lg p-4 bg-white">
                  <div className="doctor-info">
                    <img src={`http://127.0.0.1:8000/admin/doctors/${item.doctor_img}`} alt="" />

                    <div>
                      <p className="mt-2 text-center ">অভিজ্ঞতা: {item.experience} বছর</p>
                    </div>
                  </div>

                  <div className="doctor-name">
                    <h2>{item.name}</h2>
                    <p>{item.degree}</p>
                    <p className="font-bold">{item.hospital}</p>
                    <div className="w-fit px-4 h-auto mt-1 text-center text-white bg-green-500 rounded-sm doctor-button ">
                      <p>{item.specialized}</p>
                    </div>
                    <p className="text-[15px] mt-2">কনসালটেশন ফি: {item.consultation_fee} ৳</p>
                    <div className="mt-3 float-start text-[12px] flex justify-center items-center">
                      <a
                        href="#"
                        className="inline-flex justify-center items-center float-right  px-[5px] py-[3px] font-normal text-center text-black  bg-slate-50 rounded-md text-[10px] hover:shadow-xl"
                      >
                        বিস্তারিত
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="15px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#0e9f6e"
                          className=""
                        >
                          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }
      <br />
      <br />
      <br />
    </div>
  );
};

export default DoctorsDetails;
