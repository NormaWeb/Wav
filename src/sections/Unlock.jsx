import React from 'react';
import Button from '../components/Button';


const Unlock = () => {
    return (
        <div className="">
            <div className='lg:max-w-[95%] lg:pt-10 text-center mx-auto'>
                <h1 className='text-[38px] lg:text-[3.2rem] leading-tight 2xl:text-5xl lg:text-7xl/none font-semibold mb-4 text-primary'>Perfect tools and support to turn your vendor game into a success story.</h1>
                <div className='lg:max-w-[85%] mx-auto'>
                    <p className='text-[23px]/normal md:text-3xl/snug mb-2  text-primary'>We believe every serious WhatsApp Vendor can achieve business success with the right tools and support.</p>
                    <p className='text-[23px]/normal md:text-3xl/snug mb-7  text-primary'>Serious about your WhatsApp business? So are we! Get the perfect tools and support to turn your vendor game into a success story.</p>

                    <Button url="#our-pricing" label="Join the waitlist" />
                    <p className="text-[16px] text-primary mt-4">Let's vibe, thrive, and celebrate your business wins together!</p>
                </div>
            </div>
        </div>
    )
}

export default Unlock