import React from 'react';

import Header from '../partials/Header';
import Launch from '../partials/Launch';
import FeaturesHome from '../partials/Features';
import Team from '../partials/Team';
import BottomLaunch from '../partials/BottomLaunch';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Launch />
        <FeaturesHome />
        <Team />
        <BottomLaunch />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;