import { useState } from "react";

const faqs = [
  {
    category: "Eligibility",
    questions: [
      {
        question:
          "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        answer:
          "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it easy for anyone from any field of work.",
      },
      {
        question: "What is the minimum system configuration required?",
        answer:
          "A system with at least 4GB RAM and a stable internet connection is recommended.",
      },
    ],
  },
  {
    category: "How To Use?",
    questions: [
      {
        question: "How do I access course materials?",
        answer:
          "You can access all course materials via the student portal after registration.",
      },
    ],
  },
  {
    category: "Terms & Conditions",
    questions: [
      {
        question: "Can I get a refund if I’m not satisfied?",
        answer:
          "Yes, a refund is possible within the first 7 days of enrollment.",
      },
    ],
  },
];

const FAQComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(faqs[0].category);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>

      <div className="flex w-full max-w-5xl">
        <div className="w-64">
          {faqs.map((faq) => (
            <button
              key={faq.category}
              className={`block w-full text-left px-4 py-2 my-1 rounded-md border ${
                selectedCategory === faq.category
                  ? "bg-blue-500 text-black"
                  : "bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(faq.category)}
            >
              {faq.category}
            </button>
          ))}
        </div>

        <div className="flex-1 ml-6 bg-white  rounded-lg p-6">
          {faqs
            .find((faq) => faq.category === selectedCategory)
            ?.questions.map((q, index) => (
              <div key={index} className="mb-4">
                <button
                  className="text-blue-400 font-bold  font-small text-start focus:outline-none"
                  onClick={() =>
                    setExpandedQuestion(
                      expandedQuestion === index ? null : index
                    )
                  }
                >
                  {q.question}
                </button>
                {expandedQuestion === index && (
                  <p className="mt-2 text-gray-500 text-start  border-blue-500 pl-4">
                    {q.answer}
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>

      <div className="mt-8 w-2/3 h-48 bg-linear-to-t from-sky-500 to-indigo-500 bg-gradient-to-t text-white p-6 rounded-lg text-start flex items-center justify-evenly">
        <div>
          <h3 className="text-xl font-semibold">
            Want to delve deeper into the program?
          </h3>
          <p className="mt-2">
            Share your details to receive expert insights from our program team!
          </p>
        </div>
        <div>
          <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-md shadow-md hover:bg-gray-200">
            Get in Touch →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
