
const Privacy = () => {
    return (
        <div className="max-w-md mx-auto">
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
            <h1 className="text-xl mt-5 font-semibold">গোপনীয়তা নীতি :</h1>
            <p>স্বাগতম MediZone-এ। আপনার গোপনীয়তা আমাদের কাছে গুরুত্বপূর্ণ। এই গোপনীয়তা নীতি ব্যাখ্যা করে যে আমরা কীভাবে ডাক্তার, হাসপাতাল এবং অ্যাম্বুলেন্স সংক্রান্ত তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষিত করি।</p>
            <h1 className="text-lg mt-4 font-semibold">১. আমরা যে তথ্য সংগ্রহ করি</h1>
            <p>আমরা নিম্নলিখিত তথ্য সংগ্রহ করি এবং সংরক্ষণ করি:</p>
            <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                <li>ডাক্তার: নাম, ঠিকানা, ফোন নম্বর</li>
                <li>হাসপাতাল: নাম, ঠিকানা, ফোন নম্বর</li>
                <li>অ্যাম্বুলেন্স পরিষেবা: নাম, ঠিকানা, ফোন নম্বর</li>
            </ol>
            <h1 className="text-lg font-semibold mt-5">২. আমরা এই তথ্য কীভাবে ব্যবহার করি:</h1>
            <p>আমরা এই তথ্য ব্যবহার করি:</p>
            <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                <li>রোগীদের জন্য একটি সহজলভ্য ডিরেক্টরি সরবরাহ করতে।</li>
                <li>স্বাস্থ্যসেবা সম্পর্কিত পরিষেবাগুলোর সঠিক ও আপডেটেড তালিকা নিশ্চিত করতে।</li>

            </ol>
            <h1 className="text-lg font-semibold mt-5">৩. ডেটা শেয়ারিং এবং নিরাপত্তা:</h1>
            <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                <li>আমরা <span className="font-semibold">কোনো তৃতীয় পক্ষের</span>  সাথে আপনার তথ্য শেয়ার করি না।</li>
                <li>আমরা সংগৃহীত তথ্য নিরাপদে সংরক্ষণের জন্য সুরক্ষা ব্যবস্থা গ্রহণ করি।</li>

            </ol>
            <h1 className="text-lg font-semibold mt-5">৪. ব্যবহারকারীর অধিকার:</h1>
            <p>একজন ব্যবহারকারী হিসেবে, আপনি:</p>
            <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                <li>ভুল তথ্য সংশোধনের জন্য অনুরোধ করতে পারেন।</li>
                <li>যেকোনো গোপনীয়তা সংক্রান্ত প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করতে পারেন।</li>

            </ol>
            <h1 className="text-lg font-semibold mt-5">৫. আমাদের সাথে যোগাযোগ করুন:</h1>
            <p>এই গোপনীয়তা নীতি সম্পর্কে যেকোনো প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন:</p>
            <a href="mailto:info@medizone.com" className="flex gap-2 mt-2">
                <svg className="w-6 h-6 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                </svg>

                <p>info@medizone.com</p>

            </a>
            <h1 className="text-center font-bold text-lg mt-5">Thank You for using our app❤️</h1>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Privacy;