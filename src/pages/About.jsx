const About = () => {
  return (
    <div className=" max-w-md mx-auto">
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
      <div className="mt-10 text-center">
        <h1>মেডিজোনে আপনাকে স্বাগতম! 🌿💊</h1>
        <br />
        <p>মেডিজোন একটি <span className="font-semibold">তথ্যভিত্তিক মোবাইল অ্যাপ</span>, যেখানে সবাই সহজেই বিশ্বস্ত ও আপডেটেড স্বাস্থ্য সংক্রান্ত তথ্য পেতে পারেন। এখানে আপনি <span className="font-semibold">হাসপাতাল, ডাক্তার ও অ্যাম্বুলেন্স </span>সংক্রান্ত গুরুত্বপূর্ণ তথ্য এক জায়গায় পাবেন। জরুরি প্রয়োজনে সঠিক তথ্য পেতে এখন আর দুশ্চিন্তা নয়!</p>
        <br />
        <p className="font-semibold">সতর্ক থাকুন, সুস্থ থাকুন! 💙📲 #Medizone</p>
      </div>
    </div>
  );
};

export default About;
