import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import Team from '../partials/Team';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <Team />
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}

      </main>

      {/*  Site footer */}
      {/* <Footer /> */}

    </div>
  );
}

export default Home;