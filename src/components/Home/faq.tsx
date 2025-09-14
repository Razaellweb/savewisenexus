"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "How do automated savings work on SaveWise Nexus?",
    answer:
      "Create an auto‑debit plan and choose how often we should debit your card or bank account. We automatically retry failed debits so you keep momentum, and you can save into open or locked vaults.",
  },
  {
    question: "What returns should I expect on investments?",
    answer:
      "We list low‑risk options such as government bonds and T‑bills through trusted partners. Expected annualized returns typically range 13–18% depending on tenor and market rates. Fees are clearly disclosed before you invest.",
  },
  {
    question: "How fast can I get a loan and how much?",
    answer:
      "Eligible users can access instant loans backed by their savings, up to 80% loan‑to‑value (LTV). Once approved, funds are disbursed in minutes and repayments are auto‑debited.",
  },
  {
    question: "Is BVN required?",
    answer:
      "Yes. We use BVN verification to protect users and prevent fraud. It also helps us offer better limits and faster access to credit.",
  },
  {
    question: "Can I run Ajo/Esusu group savings?",
    answer:
      "Yes. Create a group, add BVN‑verified members, set the rotation schedule and payout order, and we handle reminders and payouts securely.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "SaveWise Nexus is mobile‑first with iOS and Android apps. An admin web dashboard supports monitoring, loan review, and fraud detection.",
  },
  {
    question: "How is my data secured?",
    answer:
      "We use bank‑grade encryption, tokenized payments via Paystack/Flutterwave, and strict NDPR‑aligned data practices. Your funds and data are protected with multi‑factor authentication.",
  },
];

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <div className="w-full mt-[4rem] md:mt-[6rem]" id="faq">
      {/* Header */}
      <div className="w-[97%] mx-auto md:mx-0 md:w-[68%]">
        <h1 className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left pt-4">
          <span className="text-[#facc15]">Frequently </span>Asked Questions
        </h1>
        <h1 className="text-base pt-3.5 text-white/70 text-center md:text-left">
          Still have questions? Contact our team via {" "}
          <a
            href="mailto:support@savewisenexus.com"
            className="text-[#facc15] hover:underline"
          >
            support@savewisenexus.com
          </a>
        </h1>
      </div>

      {/* FAQ List */}
      <div className="relative mt-[2rem] md:mt-[3.5rem] w-full mb-[2rem]">
        <div className="flex flex-wrap justify-between">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className="w-[97%] mx-auto md:w-[49%] 2xl:w-[48%] mt-[4.5%] md:mt-[2%] bg-white/5 rounded-[1rem] px-6 py-9 md:px-11 md:py-14 border border-white/10"
            >
              <h1 className="text-xl text-white">{faq.question}</h1>
              <div className="my-5 h-[1px] bg-white/10" />
              <p className="text-base text-white/70">{faq.answer}</p>
            </div>
          ))}
        </div>
        {/* Fade-out effect at the bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-[40vh] pointer-events-none bg-gradient-to-t from-[#0b0f14] to-transparent"
        />
      </div>

      {/* Load More Button */}
      {!showAll && (
        <div className="w-full flex items-center justify-center mt-5">
          <button
            onClick={() => setShowAll(true)}
            className="px-7 py-3 rounded-full bg-white/5 border border-white/10 text-base cursor-pointer hover:bg-white/10 transition-colors duration-300"
          >
            Load all FAQs ↓
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQ;
