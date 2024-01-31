import React from "react";
import Unlock from "./sections/Unlock";
import Powerful from "./sections/Powerful";
import Chat from "./sections/Chat";
import Choose from "./sections/Choose";
import FAQ from "./sections/FAQ";
import Waitlist from "./sections/Waitlist";
import Footer from "./sections/Footer";
import Mainlayouts from "./layouts/Mainlayouts";

const App = () => (
  <Mainlayouts>
    <section className="container padding-y bg-lemon">
      <Unlock />
    </section>

    <section className="container my-20">
      <Powerful />
    </section>

    <section className="container">
      <Chat />
    </section>

    <section className="padding">
      <Choose />
    </section>

    <section className="container mb-20">
      <FAQ />
    </section>

    <section className="container">
      <Waitlist />
    </section>

    <section className="padding">
      <Footer />
    </section>

  </Mainlayouts>
);

export default App;