import React from 'react';

function BottomLaunch() {
  return (
    <section>
      <div class='max-w-6xl mx-auto px-4 sm:px-6'>
        <div class='pb-12 md:pb-20'>
          <div
            class='relative bg-gray-900 rounded mt-20 py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden aos-init aos-animate'
            data-aos='zoom-y-out'
          >
            <div class='relative flex flex-col lg:flex-row justify-between items-center'>
              <div class='text-center lg:text-left lg:max-w-xl'>
                <h3 class='h3 text-white mb-2'>
                  Want to start building better?
                </h3>
                <p class='text-gray-300 text-lg mb-6'>
                  Squeezed is excited to launch its alpha version and we are
                  looking for engineers to try it out and make it even better.
                </p>
                <a
                  id='Launch-button-in-black-container'
                  class='btn text-gray-900 bg-[#B1DCA7] hover:bg-[#FFF962]'
                  href='https://github.com/orgs/oslabs-beta/teams/squeezed'
                >
                  Launch
                </a>
                <form class='w-full lg:w-auto'>
                  <div class='flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0'></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomLaunch;
