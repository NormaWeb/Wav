import React from 'react';
import Button from '../components/Button';

const Choose = () => {
    return (
        <section className='bg-brown rounded-3xl px-10 py-20' id='our-pricing'>
            <div className="text-center mb-10">
                <h1 className="text-lg font-bold leading-relaxed">Choose Your Right Plan</h1>
                <p className='text-sm'>Unlock the Full Potential of WAV with Our Flexible Plans</p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center align-start mx-auto gap-10">
                {/* Basic */}
                <div className="justify-center items-center bg-white rounded-3xl p-8 shadow-lg">
                    <div>
                        <div className='text-center mb-6'>
                            <p className='mb-2'>Starter</p>
                            <h1 className='text-[22px] font-bold '>Basic Plan</h1>
                            <p className='text-[16px] font-bold mb-5'> N500/ Month</p>

                            <hr className='border border-transparent border-b-black w-1/2 mx-auto' />
                        </div>


                        <ul class="list-inside list-disc text-center">
                            <li>Basic Online visibility </li>
                            <li>Connect with fellow vendors </li>
                            <li>Limited access to community features </li>
                        </ul>

                        <div className="flex justify-center items-center mt-8">
                            <Button url="https://forms.gle/W6hmqq8m2edyLrEt8" label="Get started" size="small" />
                        </div>
                    </div>
                </div>

                {/* Premium */}
                <div className="justify-center items-center bg-lemon rounded-3xl p-8 shadow-lg">
                    <div>
                        <div className='text-center mb-6'>
                            <p className='mb-2'>Growth Accelarator</p>
                            <h1 className='text-[22px] font-bold '>Premium Plan</h1>
                            <p className='text-[16px] font-bold mb-5'> N1000/ Month</p>

                            <hr className='border border-transparent border-b-black w-1/2 mx-auto' />
                        </div>


                        <ul class="list-inside list-disc text-center">
                            <li>All features from the Starter tier</li>
                            <li>Enhanced online visibility</li>
                            <li>Expanded contact list capabilities</li>
                            <li>Priority access to new features</li>
                        </ul>

                        <div className="flex justify-center items-center mt-8">
                            <Button url="https://forms.gle/W6hmqq8m2edyLrEt8" label="Get started" size="small" variant="secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Choose;
