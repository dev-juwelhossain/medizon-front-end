import "./css/Primary.css";

const Home = () => {
  return (
    <div className="m-2">
      {/* ################### Start code here ##########################*/}

      {/* Intro Video Here */}
      <div className="intro-video @media screen and (max-width: 800px) {width: 100%;}">
        <iframe
          width="100%"
          height="200px"
          src="https://www.youtube.com/embed/eHJnEHyyN1Y"
          title="6 Tips on Being a Successful Entrepreneur | John Mullins | TED"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      {/* Recommended doctors  */}
      <div className="recommended-doctors"> 
        <h2 className="mt-2 ">Recommended Doctors</h2>
        <div >
          <h2>সব দেখুন</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
            className="float-right text-green-500 rounded-full bg-slate-300" 
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
