import React from 'react';
import Button from '../components/Button';

const Choose = () => {

    return (
        <section className='bg-brown rounded-3xl p-10' id='our-pricing'>
            <div className="text-center mb-8">
                <h1 className="text-lg font-bold ">Choose Your Right Plan</h1>
                <p className='text-sm'>Unlock the Full Potential of WAV with Our Flexible Plans</p>
            </div>

            <div className="flex justify-center items-center max-w-screen-lg mx-auto max-lg:flex-col gap-10">
                {/* Basic */}
                <div className="flex-1 flex flex-col justify-center items-center bg-white rounded-3xl p-8">
                    <div>
                        <div className='text-center'>
                            <p className=' mb-2'>Starter</p>
                            <h1 className='text-sm font-bold '>Basic Plan</h1>
                            <h1 className='text-sm font-bold mb-5'> N500/ Month</h1>
                        </div>

                        <hr className='border border-transparent border-b-black mb-3' />

                        <div className='flex gap-3 items-center mt-5'>
                            <div className='w-2 h-2 bg-black rounded-xl'></div>
                            <div className='flex-1'> Connect with fellow vendors </div>
                        </div>

                        <div className='flex gap-3 items-center mt-3'>
                            <div className='w-2 h-2 bg-black rounded-xl'></div>
                            <div className='flex-1'> Basic Online visibility </div>
                        </div>

                        <div className='flex gap-3 items-center mt-3'>
                            <div className='w-2 h-2 bg-black rounded-xl'></div>
                            <div className='flex-1'> Limited access to community features </div>
                        </div>

                        <div className="flex justify-center items-center mt-8">
                            <Button label="Get started" size="small" />
                        </div>
                    </div>
                </div>

                {/* Premium */}
                <div className="flex-1 flex flex-col justify-center items-center bg-white rounded-3xl p-8">
                    <div>
                        <div className='text-center'>
                            <p className=' mb-2'>Growth Accelarator</p>
                            <h1 className='text-sm font-bold '>Premium Plan</h1>
                            <h1 className='text-sm font-bold mb-5'> N1000/ Month</h1>
                        </div>

                        <hr className='border border-transparent border-b-black mb-3' />

                        <div className=' flex gap-3 items-center mt-5'>
                            <div className='w-2 h-2 bg-black rounded-xl'></div>
                            <div className='flex-1'> All features from the Starter tier </div>
                        </div>

                        <div className=' flex gap-3 items-center'>
                            <div className='w-2 h-2 bg-black rounded-xl'></div>
                            <div className='flex-1'> Expanded contact list capabilities</div>
                        </div>

                        <div className=' flex gap-3 items-center'>
                            <div className='w-2 h-2 bg-black rounded-xl'></div>
                            <div className='flex-1'> Enhanced online visibility</div>
                        </div>

                        <div className=' flex gap-3 items-center'>
                            <div className='w-2 h-2 bg-black rounded-xl'></div>
                            <div className='flex-1'> Priority access to new features</div>
                        </div>

                        <div className="flex justify-center items-center mt-8">
                            <Button label="Get started" size="small" variant="secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Choose;
