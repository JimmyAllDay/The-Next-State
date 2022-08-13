import { Icon } from "@iconify/react";

export default function FooterSignUp() {
  return (
    <div className="w-full flex flex-col px-3 items-center md:items-start">
      <div className="flex mb-2  w-[350px] sm:w-3/4">
        <Icon icon="ei:envelope" className="text-4xl w-[40px] flex-shrink-0" />
        <p className="my-auto ml-2">
          Lets connect. Get updates on new arrivals, sales and more.
        </p>
      </div>

      <div className="w-[350px] sm:w-3/4">
        <input
          type="email"
          className="w-3/4 h-[45px] bg-gray-600 rounded-l-md px-2 text-gray-200 focus:outline-none"
        />
        <button className="bg-white w-1/4 h-[45px] rounded-r-md text-gray-900">
          SIGN UP
        </button>
      </div>
    </div>
  );
}
