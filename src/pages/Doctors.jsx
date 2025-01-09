import "./css/Secondary.css";

const Doctors = () => {
  return (
    <div className="m-3">
      {/* Start code here */}
      {/* Recommended Doctors List */}
      <div className="popular-doctors">
        <h2>জনপ্রিয় ডাক্তাররা</h2>
      </div>
      <div className="doctor-profile">
        <div className="w-100% border  flex  gap-4 rounded-lg shadow-lg p-4 bg-white">
          <div className="doctor-info">
            <img src="../img/doctor.jpg" alt="" />
          </div>

          <div className="doctor-name">
            <h2>ডাক্তার নাম </h2>
            <p>ডার্মাটোলজিস্ট (MBBS)</p>
                <div className="doctor-button bg-blue-500 text-white text-center h-auto w-auto rounded-sm mt-1 ">
                <p>
              ডার্মাটোলজিস্ট
            </p>

                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
