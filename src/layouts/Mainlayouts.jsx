import React from 'react';
import Nav from '../components/Nav';
// import Footer from '../components/Footer';

function Mainlayouts({ children }) {
  return (
    <main className="relative">
      <Nav></Nav>

      {children}

      {/* <Footer></Footer> */}
    </main>
  )
}

export default Mainlayouts