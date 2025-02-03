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
      <section className="grid grid-cols-2 object-contain gridify-center s-center ">
        {
          ambulance?.map(item => {
            return (
              <>

                <div className="m-2">
                  {/* here is ambulance profile card 1 */}

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
                        <p className="text-[12px] m-1 ">{item.phone_number} </p>
                        <p className="text-[12px] m-1">{item.location}</p>
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center px-2  mt-2 font-normal text-center text-black  bg-white rounded-md text-[13px] hover:shadow-md"
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

              </>
            )
          })
        }
      </section>
      <br /><br /><br />
    </div>
  );
};


export default Ambulance;
