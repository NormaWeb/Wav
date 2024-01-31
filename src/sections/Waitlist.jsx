import React from 'react';
import Button from '../components/Button';

const Waitlist = () => {
    return (
        <section className="">
            <div className="text-center">
                <h1 className='text-[32px] lg:text-5xl text-primary font-bold leading-tight mb-4'>Are you ready to grow your contact list and be discovered online?</h1>
                <p className='text-[18px] lg:text-lg leading-normal w-4/5 mx-auto'>Join our exclusive waitlist and be among the first to unlock opportunities for Your WhatsApp business! </p>
            </div>

            <div className="flex justify-center items-center mt-10">
                <Button label="Join the waitlist" />
            </div>

        </section>




    )
}

export default Waitlist