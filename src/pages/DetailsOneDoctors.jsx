import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router"; // Fixed import

const DetailsOneDoctors = () => {
  const { id } = useParams(); // Fixed useParams usage
  const [doctor, setDoctor] = useState({}); // Initialize as an object
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios.get(`${BASE_URL}/doctors/${id}`)
      .then(function (response) {
        setDoctor(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="max-w-md m-2 mx-auto mb-2">
      {/* Back Button */}
      <div className="flex">
        <NavLink to="/expert-doctors" className="flex m-2">
          <svg
            className="w-6 h-6 text-green-500 dark:text-white"
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
          <h2 className="font-semibold text-green-500">ডাক্তারের তথ্য</h2>
        </NavLink>

        {/* Share & Favourite Icon */}
        <div className="flex m-2 ml-auto space-x-2">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
            </svg>
          </a>

          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Doctor Details */}
      {doctor && (
        <>
          {/* Doctors Image */}
          <div className="flex">
            <div className="m-2 overflow-hidden rounded-[8px] doctor-info">
              <img src={`http://127.0.0.1:8000/admin/doctors/${doctor.doctor_img}`} alt={doctor.name} />
              <p>অভিজ্ঞতা: {doctor.experience}</p>
            </div>

            {/* Doctors Name Details */}
            <div className="mt-3 ml-1">
              <h2 className="text-xl font-semibold">{doctor.name}</h2>
              <p className="text-sm text-gray-500">{doctor.degree}</p>
              <div className="h-auto mt-1 font-medium text-center text-white bg-blue-700 rounded-sm w-15 doctor-button">
                <p>{doctor.specialized}</p>
              </div>
            </div>
          </div>

          {/* Doctor's Information */}
          <div className="ml-3">
            <p className="text-slate-400">পদ :</p>
            <p> {doctor.e_degree}</p>
            <p className="text-sm text-gray-500">কর্মস্থল</p>
            <p>{doctor.hospital}</p>
          </div>

          {/* Doctor's Information */}
          <div className="mt-10">
            <h4 className="px-3 mx-3 ml-3 font-semibold text-center text-green-500 rounded-lg shadow-md bg-gray-50">
              তথ্য ও অভিজ্ঞতা
            </h4>
          </div>

          {/* Appointment Time */}
          <div className="inline-flex mt-5 px-2 py-1 mb-4 text-lg font-semibold text-green-500 dark:text-white">
            <svg
              className="text-green-500 h-7 w-7 dark:text-white"
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
                d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
              />
            </svg>
            <h4 className="px-2 text-black">এপয়েন্টমেন্ট এর সময় :</h4>
          </div>
          <div className="ml-3">
            <ul
              role="list"
              className="pl-5 space-y-3 list-disc marker:text-green-400 text-slate-500"
            >
              <li>{doctor.appointment_time}</li>
              <li>স্থান : {doctor.address}</li>
            </ul>
          </div>

          {/* Consultation Fee */}
          <div className="inline-flex mt-3 ml-4 font-semibold">
            <svg
              className="mr-2"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M1395 4576 c-110 -27 -212 -103 -268 -199 -40 -67 -42 -90 -16 -155
25 -64 84 -185 106 -219 14 -22 16 -22 41 -5 20 13 48 17 122 17 89 0 99 -2
158 -34 35 -19 81 -55 103 -79 67 -77 69 -92 69 -564 l0 -418 -399 -2 -399 -3
196 -203 197 -203 203 1 202 0 0 -711 c0 -786 -1 -768 65 -898 91 -178 251
-299 464 -347 36 -8 140 -17 231 -20 144 -5 179 -3 270 15 234 48 549 179 746
309 279 186 557 560 663 895 51 162 64 258 58 452 -4 132 -10 188 -27 250 -82
299 -286 541 -520 616 -90 29 -249 36 -357 16 -141 -27 -228 -81 -297 -186
-76 -116 -90 -165 -90 -321 0 -153 16 -228 67 -324 84 -159 257 -242 485 -234
l92 3 -6 -45 c-16 -123 -62 -255 -124 -360 -143 -244 -419 -493 -642 -581 -71
-28 -99 -33 -197 -37 -129 -5 -201 7 -274 46 -65 35 -130 109 -159 180 l-23
57 -3 612 -3 613 320 2 320 3 -195 202 -195 202 -122 3 -122 3 -5 555 -6 555
-27 99 c-69 255 -191 396 -378 441 -77 18 -253 18 -324 1z"
                />
              </g>
            </svg>
            <p>পরামর্শ ফি- {doctor.consultation_fee}/-</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="ml-3 mb-2 font-semibold text-[18px]">যোগাযোগ করুন</h3>
            <div className="flex items-center mb-2 ml-3 space-x-1">
              <svg
                className="w-[24px] h-[24px] text-gray-800 dark:text-white border border-black rounded-xl"
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
                  strokeWidth="1"
                  d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                />
              </svg>
              <p>{doctor.contact}</p>
            </div>
          </div>

          {/* About Doctor */}
          <div>
            <h2 className="ml-2 mb-1 mt-2 text-[20px] font-bold">ডাক্তার সম্পর্কে :</h2>
            <p className="p-2 ml-1 mr-1 border border-gray-400 rounded-lg shadow-lg text-start">
              {doctor.about_doctor}
            </p>
          </div>

         
          
        </>
      )}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default DetailsOneDoctors;