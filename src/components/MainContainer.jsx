import { useState } from "react";
import {
  Hero_Section_Cash_Image,
  Hero_Section_Main_Image,
} from "../utils/constanst";
import Modal from "./Modal";

const MainContainer = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="relative bg-gray-50 min-h-screen flex flex-col items-center">
      <Modal open={openModal} onClose={handleCloseModal} />

      <div className="absolute top-6 flex bg-gray-100 px-6 py-2 rounded-full shadow-lg gap-4">
        {["Refer", "Benefits", "FAQs", "Support"].map((item, index) => (
          <button
            key={index}
            className="relative px-4 py-1 text-gray-700 hover:text-blue-600 transition duration-300"
          >
            {item}
            {item === "Refer" && (
              <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      <div className="container w-11/12 md:w-3/4 mt-24 mx-auto flex flex-col md:flex-row items-center gap-2 pl-20 py-8 my-2 bg-blue-50 rounded-xl shadow-2xl border border-gray-200 h-[600px] md:h-[600px] ">
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="text-6xl font-bold text-gray-900">
            Let&apos;s Learn & Earn
          </h1>
          <p className="text-gray-600 mt-4 text-2xl">
            Get a chance to win up to{" "}
            <span className="text-blue-600 font-bold text-4xl">Rs. 15,000</span>
          </p>
          <button
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition btn"
            onClick={() => setOpenModal(true)}
          >
            Refer Now
          </button>
        </div>

        <div className="md:w-2/3 flex justify-center items-center relative">
          <img
            src={Hero_Section_Main_Image}
            alt="Refer & Earn"
            className="w-full h-11/12 max-w-[800px] object-contain z-30 aspect-1/1"
          />
          <img
            src={Hero_Section_Cash_Image}
            className="absolute top-25 rotate-180 z-10 left-[35%] w-12 md:w-24"
            alt="Cash"
          />
          <img
            src={Hero_Section_Cash_Image}
            className="absolute bottom-40 right-[2%] w-12 md:w-24"
            alt="Cash"
          />
          <img
            src={Hero_Section_Cash_Image}
            className="absolute top-[15%] right-[10%] w-16 md:w-24 rotate-180 "
            alt="Cash"
          />
          <img
            src={Hero_Section_Cash_Image}
            className="absolute bottom-40 left-[30%] w-12 md:w-24 z-40"
            alt="Cash"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
