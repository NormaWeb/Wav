import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faqData = [
        {
            question: 'What is WAV?',
            answer: "WAV is a dedicated space for WhatsApp vendors to connect, grow their contact lists, and enhance their online visibility. It's a platform designed to empower vendors and take their businesses to new heights.",
        },
        {
            question: 'Is it free to join the waitlist?',
            answer: "Yes, joining the waitlist is completely free! Simply sign up to secure your spot and gain early access to WAV's exclusive features.",
        },
        {
            question: 'What benefits do I get as a waitlist member?',
            answer: "As a waitlist member, you'll enjoy exclusive perks, early access to the platform, and a community of like-minded vendors. Be part of the journey and unlock tools to accelerate your WhatsApp business.",
        },
        {
            question: "What's included in the Premium Tier?",
            answer: "The Premium Tier, priced at N2,000/month, includes all the features from the Starter tier, with added benefits like expanded contact list capabilities, enhanced online visibility, and priority access to new features.",
        },
        {
            question: "Is there a money-back guarantee?",
            answer: "Yes, all plans come with a 30-day money-back guarantee. If you're not satisfied with your subscription within the first 30 days, we'll refund your payment, no questions asked.",
        },
    ];

    return (
        <section className="max-container flex flex-col justify-center items-center">
            <div className="text-center mb-10">
                <h1 className="text-lg font-bold leading-relaxed">Frequently Asked Questions</h1>
                <p className='text-sm'>Answers to most common questions.</p>
            </div>

            <div className="max-w-lg">
                {faqData.map((item, index) => (
                    <div key={index} className={`py-5 px-5 bg-white shadow-lg mb-4 ${activeIndex === index ? '' : ''}`}>
                        <button
                            className="flex text-start items-center justify-between w-full"
                            onClick={() => handleAccordionClick(index)}
                        >
                            <h1 className="font-bold">{item.question}</h1>
                            <span className="text-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-6 h-6 transition-transform transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                        {activeIndex === index && <p className='mt-3'>{item.answer}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
