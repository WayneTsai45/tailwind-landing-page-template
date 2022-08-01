import React, { useState } from 'react';
// import Modal from '../utils/Modal';

import HeroImage from '../images/Squeezed_mark-03.png';
import Flipped from '../images/Squeezed_flipped.png';
import squeezed from '../images/Squeezed.png';
import temp from '../images/totoro-hula-hoop.gif';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-gray-900">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
          <img className="mx-auto" src={squeezed} width="768" height="432" alt="Hero" />
            <div className="max-w-xl mx-auto">
              <p className="text-3xl text-gray-200 mb-8" data-aos="zoom-y-out" data-aos-delay="150">A charming web application tool built for developers for Fresh development.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white border-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="https://github.com/oslabs-beta/squeezed">GitHub</a>
                </div>
                <div>
                  <a className="btn text-gray-900 bg-[#B1DCA7] hover:bg-[#FFF962] w-full sm:w-auto sm:ml-4" href="#0">Launch</a>
                </div>
              </div>
            </div>
          </div>

          {/*image */}
          <div>
            <div className="relative flex-row justify-center mb-8 ml-100" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex justify-center">
                <img className="mx-auto" src={Flipped} width="768" height="432" />
                <img className="mx-auto" src={temp} />
                <img className="mx-auto" src={HeroImage} width="768" height="432"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;