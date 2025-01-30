import axios from "axios";
import { useEffect, useState } from "react";

const Ambulance = () => {
  const [ambulance, setAmbulance] = useState()
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get(`${BASE_URL}/ambulance`)
      .then(function (response) {
        // handle success
        setAmbulance(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  return (
    <div className="max-w-md m-3 mx-auto">
      <div className="inline-flex px-2 mb-4 text-lg font-semibold text-green-500 dark:text-white">
        <a href="">
          <svg
            className="w-5 h-5 text-green-500 mt-[2px] dark:text-white"
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
        <h3 className="mb-4">অ্যাম্বুলেন্স তালিকা</h3>
      </div>
      {/* BP ambulance service */}
      {
        ambulance?.map(item => {
          return (
            <>
              <div className="mb-4 ml-1 mr-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="flex justify-center items-center h-[135px] w-full object-cover rounded-t-lg"
                    src={`https://medizone.ruddro.my.id/admin/ambulance/${item.ambulance_picture}`}
                    alt=""
                  />
                </a>
                <div className="px-2 py-1">
                  <div>
                    <h2 className="text-[15px] font-bold">
                      {item.name}
                    </h2>
                    <p className="text-[15px] m-1 "> {item.phone_number}</p>
                    <p className="text-[14px] m-1">{item.location}</p>
                  </div>

                </div>
                <a
                  href="#"
                  className="inline-flex items-center mb-2 ml-1 px-2 font-normal text-center text-black  bg-white rounded-md text-[13px] hover:shadow-md"
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
            </>
          )
        })
      }
      <br /><br /><br />
    </div>
  );
};


export default Ambulance;
