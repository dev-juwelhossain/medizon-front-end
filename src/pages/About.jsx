const About = () => {
  return (
    <div className="m-2 mb-[70px] max-w-md mx-auto">
      {/* Back Button */}
      <div>
        <div to="/settings" className="flex m-2 mt-3">
          <a href="/settings">
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
          </a>
          <h2 className="font-semibold text-green-500">ফিরে যান</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
