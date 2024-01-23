import React from 'react';

const Powerful = () => {
    return (
        <section className="bg-brown rounded-3xl p-10">
            <div className="text-center mb-8">
                <h1 className="text-lg font-bold leading-tight">Powerful Tools Tailored  for <br /> WhatsApp Vendors</h1>
            </div>

            <div className="flex items-center max-lg:flex-col gap-10">
                <div className="flex flex-1 flex-col items-center mt-4 mb-8">
                    <div className='w-20 h-20 bg-white rounded-full'></div>
                    <h4 className='text-primary text-2xl font-bold mt-3'>Grow Your Contacts </h4>
                    <p className='text-center mt-3 text-primary'>Easily expand your customer <br /> base by connecting with fellow <br /> WhatsApp vendors.</p>
                </div>

                <div className="flex flex-1 flex-col items-center mt-4 mb-8">
                    <div className='w-20 h-20 bg-white rounded-full'></div>
                    <h4 className='text-primary text-2xl font-bold mt-3'>Community Connection</h4>
                    <p className='text-center text-primary mt-3'>Join a vibrant community of like- <br />minded vendors, sharing insights <br /> and fostering collaborations.</p>
                </div>

                <div className="flex flex-1 flex-col items-center mt-4 mb-8">
                    <div className='w-20 h-20 bg-white rounded-full'></div>
                    <h4 className='text-primary text-2xl font-bold mt-3'>Boost Online Visibility</h4>
                    <p className='text-center text-primary mt-3'>Stand out in the digital  <br /> landscape and attract more <br /> customers to your business.</p>
                </div>
            </div>
        </section>
    );
}

export default Powerful;
