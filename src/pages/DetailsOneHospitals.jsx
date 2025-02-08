import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";

const DetailsOneHospitals = () => {
  const { id } = useParams(); // Fixed useParams usage
  const [hospital, setHospital] = useState({}); // Initialize as an object
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios.get(`${BASE_URL}/hospital/${id}`)
      .then(function (response) {
        setHospital(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="max-w-md m-3 mx-auto">
      {/* back button */}
      <NavLink to='/hospitals' className="inline-flex px-2 py-1 mb-4 text-lg font-semibold text-green-500 dark:text-white">
        <div >
          <svg
            className="w-5 h-5 text-green-500 mt-[2px] dark:text-white"
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
        <h3 className="">হাসপাতালের বিস্তারিত </h3>
      </NavLink>

      {/* hospital details start here */}
      {hospital && (



        <section>
          <div>
            <img 
              src={`http://127.0.0.1:8000/admin/hospitals/${hospital.hospital_picture}`} alt={hospital.name}
              className="w-full h-auto rounded-md"
            />
          </div>

          <div className="m-2">
            <h2 className="text-xl font-semibold">{hospital.name}</h2>
            {/* information button */}
            <div className="mt-10 ">
              <h4 className="px-3 mx-3 ml-3 font-semibold text-center text-green-500 rounded-lg shadow-md bg-gray-50">
                তথ্য ও সেবা
              </h4>
            </div>
            <br />

            {/* information section */}

            <div>
              <div className="m-2">
                <h3 className="text-medium text-slate-800">
                  <span className="font-bold">স্থান: </span> {hospital.location}
                </h3>
              </div>

              {/* contact info */}
              <h3 className="ml-3 mb-2 font-semibold text-[20px]">
                যোগাযোগ করুন :
              </h3>

              <div className="flex items-center mb-2 ml-3 space-x-1">
                <svg
                  className="w-[24px] h-[24px] mr-1 text-green-500 dark:text-white  border border-green-600 rounded-xl"
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
                <p>{hospital.phone_number}</p>
              </div>
              <div className="flex items-center mb-2 ml-3 space-x-1">
                <svg className="w-6 h-6 mr-1 text-green-500 " aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                 viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                </svg>

                <p>{hospital.email}</p>
              </div>

            </div>
            <br />
          </div>
          <div>
            <h2 className="ml-3 text-[20px] font-semibold">হাসপাতাল সম্পর্কে: </h2>
            <div className="m-1">
              <p className="p-2 border border-gray-400 rounded-lg shadow-lg">
                {hospital.about_hospital}
              </p>
            </div>
          </div>
          <div>
            <h1 className="mt-3 ml-2 text-[20px] font-semibold mb-2">সেবা সমূহ:</h1>

            <div className="ml-3 ">
              <p className="p-2 border border-gray-400 rounded-lg shadow-lg">{hospital.services}</p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </section>)
      }
    </div>
  );
};

export default DetailsOneHospitals;