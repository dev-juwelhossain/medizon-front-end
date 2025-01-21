import { NavLink } from "react-router";

const BottomNav = () => {
  return (
    <div className="max-w-md mx-auto">
      <div className="fixed bottom-0 z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-lg left-1/2 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `inline-flex flex-col items-center justify-center px-5 group ${
                isActive
                  ? "bg-gray-200 text-green-500 dark:bg-gray-800"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
              }`
            }
          >
            <svg
              className="w-5 h-5 mb-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span>হোম</span>
          </NavLink>

          {/* Hospitals */}
          <NavLink
            to="/hospitals"
            className={({ isActive }) =>
              `inline-flex flex-col items-center justify-center px-5 group ${
                isActive
                  ? "bg-gray-200 text-green-500 dark:bg-gray-800"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M40-120v-720h560v720H360v-160h-80v160H40Zm80-80h80v-160h240v160h80v-560H120v560Zm80-240h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm420 260-56-56 43-44H640v-80h127l-43-44 56-56 140 140-140 140ZM200-200v-160h240v160-160H200v160Z" />
            </svg>
            <span>হাসপাতাল</span>
          </NavLink>

          {/* Doctors */}
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              `inline-flex flex-col items-center justify-center px-5 group ${
                isActive
                  ? "bg-gray-200 text-green-500 dark:bg-gray-800"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
            </svg>
            <span>ডাক্তার</span>
          </NavLink>

          {/* Ambulance */}
          <NavLink
            to="/ambulance"
            className={({ isActive }) =>
              `inline-flex flex-col items-center justify-center px-5 group ${
                isActive
                  ? "bg-gray-200 text-green-500 dark:bg-gray-800"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M440-800v-160h80v160h-80Zm-177 57L143-863l57-57 120 120-57 57ZM160-40q-17 0-28.5-11.5T120-80v-320l84-240q6-18 21.5-29t34.5-11h100v-80h131q-24 34-37.5 74.5T440-600H274l-59 160h276q17 24 38 44.5t47 35.5H200v160h560v-123q21-3 41-9t39-15v267q0 17-11.5 28.5T800-40h-40q-17 0-28.5-11.5T720-80v-40H240v40q0 17-11.5 28.5T200-40h-40Zm80-200h120q17 0 28.5-11.5T400-280q0-17-11.5-28.5T360-320H240v80Zm480 0v-80H600q-17 0-28.5 11.5T560-280q0 17 11.5 28.5T600-240h120ZM200-360v160-160Zm491-150 139-138-42-42-97 95-39-39-42 43 81 81Zm29-290q83 0 141.5 58.5T920-600q0 83-58.5 141.5T720-400q-83 0-141.5-58.5T520-600q0-83 58.5-141.5T720-800Z" />
            </svg>
            <span>এম্বুলেন্স</span>
          </NavLink>

          {/* Settings */}
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `inline-flex flex-col items-center justify-center px-5 group ${
                isActive
                  ? "bg-gray-200 text-green-500 dark:bg-gray-800"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
            </svg>
            <span>সিটিংস</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
