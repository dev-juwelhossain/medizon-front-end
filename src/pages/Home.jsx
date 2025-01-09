import './css/Primary.css'

const Home = () => {
  return (
    <div className="m-2">
      {/* ################### Start code here ##########################*/}

      {/* Intro Video Here */}
      <div className="intro-video">
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
    </div>
  );
};

export default Home;
