import React from 'react';

function Footer() {
  return (
    <section className="bg-lemon rounded-3xl p-10">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="text-white text-2xl font-semibold mb-14 lg:mb-0">
          <a href="#" className="text-5xl font-semibold text-primary">WAV</a>
        </div>

        <ul className="flex flex-col lg:flex-row lg:space-x-10 gap-10 text-primary mb-4 lg:mb-0 ">
          <li><a href="#" className="hover:text-lite-green text-sm">Join the waitlist</a></li>
          <li><a href="#" className="hover:text-lite-green text-sm">Terms & conditions</a></li>
          <li><a href="#" className="hover:text-lite-green text-sm">Privacy Policy</a></li>
        </ul>
      </div>

      <div className="text-primary text-sm"> 2024 WAV, All Rights Reserved.</div>
    </section>
  );
}

export default Footer
