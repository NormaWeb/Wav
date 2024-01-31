import React from 'react';

function Footer() {
  return (
    <section className="bg-lemon rounded-3xl p-10">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-10 lg:mb-1">
        <div className="mb-14 lg:mb-0">
          <a href="#" className="font-semibold text-5xl font-semibold text-primary">WAV</a>
          <div className="text-primary text-sm"> 2024 WAV, All Rights Reserved.</div>
        </div>

        <ul className="flex flex-col lg:flex-row gap-10 text-primary mb-4 lg:mb-0 ">
          <li><a href="#" className="hover:text-lite-green text-sm">Join the waitlist</a></li>
          <li><a href="#" className="hover:text-lite-green text-sm">Terms & conditions</a></li>
          <li><a href="#" className="hover:text-lite-green text-sm">Privacy Policy</a></li>
        </ul>
      </div>

    </section>
  );
}

export default Footer
