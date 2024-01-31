import React from 'react';
import Button from '../components/Button';


const Unlock = () => {
    return (
        <div className="">
            <div className='lg:max-w-[70%] lg:pt-10 '>
                <h1 className='text-[38px] lg:text-[3.2rem] leading-tight 2xl:text-5xl lg:text-7xl/none  font-semibold mb-5  text-primary'>Unlock New Opportunities for Your WhatsApp Business!</h1>
                <p className='text-[23px]/normal md:text-3xl/snug mb-7  text-primary'>Welcome to <span className='font-semibold'>WAV</span>, the ultimate space for WhatsApp vendors to connect, grow their reach, and thrive in the digital marketplace.</p>

                <Button url="#our-pricing" label="Join the waitlist" />
            </div>
        </div>
    )
}

export default Unlock