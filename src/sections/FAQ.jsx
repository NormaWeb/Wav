import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faqData = [
        {
            question: 'How to get an extension on a payment?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere provident dolore consequatur optio, nisi ratione quasi alias ipsum aliquam odio sapiente ab aspernatur inventore cupiditate tempore autem consequuntur rerum saepe! ',
        },

        {
            question: 'What are your store hours?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere provident dolore consequatur optio, nisi ratione quasi alias ipsum aliquam odio sapiente ab aspernatur inventore cupiditate tempore autem consequuntur rerum saepe!',
        },

        {
            question: 'How would I be able to get my money back from a fradulent claim? ',
            answer: ': Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere provident dolore consequatur optio, nisi ratione quasi alias ipsum aliquam odio sapiente ab aspernatur inventore cupiditate tempore autem consequuntur rerum saepe!',
        },

        {
            question: 'What kind of warrantee comes with all of your products?',
            answer: ': Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere provident dolore consequatur optio, nisi ratione quasi alias ipsum aliquam odio sapiente ab aspernatur inventore cupiditate tempore autem consequuntur rerum saepe!',
        },






    ];

    return (
        <section className="max-container">
            <div className="text-center">
                <h1 className="text-lg font-bold">Frequently Asked Questions</h1>
                <p className='text-sm mb-10'>Answes to most common Questions.</p>

                <div className="flex justify-between max-lg:flex-col gap-20 mt-10">
                    <div className="flex-1">
                        <div className="justify-center items-center">
                            {faqData.map((item, index) => (
                                <div key={index} className={`py-4 bg-white shadow-md mb-4 ${activeIndex === index ? '' : ''}`}>
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
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </span>
                                
                                    </button>
                                    {activeIndex === index && <p className='mt-3'>{item.answer}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
