import React from 'react';
import Button from '../components/Button';

const Waitlist = () => {
    return (
        <section className="">
            <div className="text-center">
                <h1 className='text-lg text-primary font-bold leading-tight'>
                    Are you ready to grow your contact list <br /> and be discovered online?
                </h1>
                <p className='text-green mt-5 font-semibold'>Join our exclusive waitlist and be among the first to <br /> unlock opportunities for Your WhatsApp business! </p>
            </div>

            <div className="flex justify-center items-center mt-10">
                <Button label="Join the waitlist" />
            </div>

        </section>




    )
}

export default Waitlist