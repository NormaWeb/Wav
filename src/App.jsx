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

    <section className="padding">
      <Powerful />
    </section>

     <section className="padding">
      <Chat />
    </section> 

    <section className="padding">
      <Choose />
    </section>

    <section className="padding">
      <FAQ />
    </section>

    <section className="padding">
      <Waitlist />
    </section>

    <section className="padding">
      <Footer />
    </section>

  </Mainlayouts>
);

export default App;