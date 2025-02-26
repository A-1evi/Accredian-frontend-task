import React, { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../utils/constanst";
import axios from "axios";

const Modal = ({ open, onClose }) => {
  const dialogRef = useRef(null);

  // State for form inputs
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [referredBy, setReferredBy] = useState("");
  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(BASE_URL + "/referrals", {
        name,
        email,
        phone,
        referredBy,
      });
      onClose();
    } catch (error) {
      console.log("ERROR:" + error.message);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal p-6 bg-white rounded-lg shadow-lg w-11/12 max-w-lg animate-[ease-in-out] mx-auto "
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        User Information
      </h2>

      <div className="grid grid-cols-1 gap-4  justify-center items-center">
        {/* Name Input */}
        <label className="flex flex-col">
          <span className="text-gray-600 mb-1">Name</span>
          <input
            type="text"
            name="name"
            className="input input-bordered p-2 rounded border border-gray-300"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        {/* Email Input */}
        <label className="flex flex-col">
          <span className="text-gray-600 mb-1">Email</span>
          <input
            type="email"
            name="email"
            className="input input-bordered p-2 rounded border border-gray-300"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        {/* Phone Input */}
        <label className="flex flex-col">
          <span className="text-gray-600 mb-1">Phone Number</span>
          <input
            type="tel"
            name="phone"
            className="input input-bordered p-2 rounded border border-gray-300"
            placeholder="1234567890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        {/* Referred By Input */}
        <label className="flex flex-col">
          <span className="text-gray-600 mb-1">Referred By</span>
          <input
            type="text"
            name="referredBy"
            className="input input-bordered p-2 rounded border border-gray-300"
            placeholder="Enter referrer's name"
            value={referredBy}
            onChange={(e) => setReferredBy(e.target.value)}
          />
        </label>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 mt-4 ">
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
