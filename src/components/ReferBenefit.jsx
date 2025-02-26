import  { useState } from "react";

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrerBonus: "₹ 7,000",
    refereeBonus: "₹ 9,000",
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrerBonus: "₹ 9,000",
    refereeBonus: "₹ 11,000",
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Advanced Certification in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
];

const categories = [
  "Product Management",
  "Strategy & Leadership",
  "Business Management",
  "Fintech",
  "Senior Management",
  "Data Science",
  "Digital Transformation",
  "Business Analytics",
];

const ReferBenefits = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        What Are The <span className="text-blue-600">Referral Benefits?</span>
      </h2>

      <div className="flex w-full max-w-6xl">
        <div className="w-64 bg-blue-100 rounded-lg shadow-md p-4">
          <h3 className="text-blue-600 font-semibold mb-2">ALL PROGRAMS</h3>
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className="py-2 px-3 hover:bg-blue-200 rounded-md cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 bg-white shadow-lg rounded-lg ml-4 p-4">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
           
            <div className="flex justify-end">
              <span className="text-gray-600 mr-2">Enrolled</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={isEnrolled}
                onChange={() => setIsEnrolled(!isEnrolled)}
              />
            </div>
          </div>

          <table className="w-full ">
            <thead>
              <tr className="text-left border-b bg-blue-300">
                <th className="p-2">Programs</th>
                <th className="p-2">Referrer Bonus</th>
                <th className="p-2">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{program.name}</td>
                  <td className="p-2">{program.referrerBonus}</td>
                  <td className="p-2">{program.refereeBonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button className="mt-6 bg-blue-500 text-xl text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition">
        Refer Now
      </button>
    </div>
  );
};

export default ReferBenefits;
