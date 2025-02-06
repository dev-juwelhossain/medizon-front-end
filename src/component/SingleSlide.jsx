import axios from "axios";
import { useEffect, useState } from "react";

const SingleSlide = ({Id}) => {
  const [doctor, setDoctor] = useState();
  const [error, setError] = useState();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    console.log("Fetching doctor data for ID:", Id);
    console.log("BASE_URL:", BASE_URL);

    /* axios.get(`${BASE_URL}/doctors/${4}`) */
    axios.get(`${BASE_URL}/doctors/${10}`)
      .then(response => {
        console.log("API Response:", response.data);
        setDoctor(response.data);
      })
      .catch(error => {
        console.error("Error fetching doctor data:", error);
        setError("Doctor not found.");
      });
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!doctor) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="m-2 mb-2 doctor-profile">
        <div className="w-full border flex gap-4 rounded-sm shadow-lg p-4 bg-white">
          <div className="doctor-info">
            <img
              src={`${BASE_URL}/admin/doctors/${doctor.doctor_img}`}
              alt={doctor.name}
              className="w-32 h-32 object-cover rounded-full"
              
            />
            <div>
              <p className="mt-2 text-center">অভিজ্ঞতা: {doctor.experience} বছর</p>
              <p className="text-[15px] mt-1">কনসালটেশন ফি: {doctor.consultation_fee} ৳</p>
            </div>
          </div>

          <div className="doctor-name">
            <h2 className="font-bold text-lg">{doctor.name}</h2>
            <div className="w-fit h-auto px-2 mt-1 mb-1 text-center text-white bg-green-500 rounded-sm">
              <p>{doctor.specialized}</p>
            </div>
            <p>{doctor.degree}</p>
            <p>{doctor.e_degree}</p>
            <p className="font-bold">{doctor.hospital}</p>
            <p><span className="font-bold">চেম্বার:</span> {doctor.address}</p>

            <div className="text-[12px]">
              <a
                href="#"
                className="inline-flex items-center mt-3 px-[5px] py-[3px] text-black bg-slate-50 rounded-md text-[10px] hover:shadow-lg"
              >
                বিস্তারিত
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="15px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#0e9f6e"
                  className="ml-1"
                >
                  <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSlide;