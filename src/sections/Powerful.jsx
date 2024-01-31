import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsers, faGlobe, faHandshake } from '@fortawesome/free-solid-svg-icons';


const Powerful = () => {
    return (
        <section className="bg-brown rounded-3xl px-10 py-20">
            <div className="text-center mb-10 max-w-sm mx-auto">
                <h1 className="text-lg font-bold leading-tight">Powerful Tools Tailored  for WhatsApp Vendors</h1>
            </div>

            <div className="flex items-center max-lg:flex-col gap-10">
                <div className="flex flex-1 flex-col items-center mt-4 mb-8">
                    {/* <div className='w-20 h-20 bg-white rounded-full'></div> */}
                    {/* <img src=""  /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="40"
                        height="40"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" className='w-1 h-1' /></svg>

                    <h4 className='text-primary text-[18px] mb-0 font-bold mt-4'>Grow Your Contacts </h4>
                    <p className='text-center text-primary mt-1'>Easily expand your customer base by connecting with fellow WhatsApp vendors.</p>
                </div>

                <div className="flex flex-1 flex-col items-center mt-4 mb-8">
                    {/* <div className='w-20 h-20 bg-white rounded-full'></div> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="40"
                        height="40"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" className='w-5 h-5' /></svg>
                    <h4 className='text-primary text-[18px] mb-0 font-bold mt-4'>Community Connection</h4>
                    <p className='text-center text-primary mt-1'>Join a vibrant community of like-minded vendors, sharing insights and fostering collaborations.</p>
                </div>

                <div className="flex flex-1 flex-col items-center mt-4 mb-8">
                    {/* <div className='w-20 h-20 bg-white rounded-full'></div> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="40"
                        height="40"><path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" className='w-5 h-5' /></svg>
                    <h4 className='text-primary text-[18px] mb-0 font-bold mt-4'>Boost Online Visibility</h4>
                    <p className='text-center text-primary mt-1'>Stand out in the digital  landscape and attract more customers to your business.</p>
                </div>
            </div>
        </section>
    );
}

export default Powerful;
