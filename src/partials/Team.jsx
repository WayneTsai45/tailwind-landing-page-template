import React from 'react';
import Wayne from '../images/totoro-hula-hoop.gif';

function FeaturesBlocks() {
  return (
    <section className='relative bg-gray-900'>
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <a name="team"></a>
      <div
        className='absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none'
        aria-hidden='true'
      ></div>
      <div className='absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-900 transform translate-y-1/2'></div>

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6 '>
        <div className='bg-gray-900 py-12 md:py-20'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h2 className='h2 mb-4 text-gray-200'>Meet our Team !!</h2>
          </div>

          {/* Items */}
          <div className='max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none'>
            {/* 1st item */}
            <div class='relative flex flex-col items-center .border-purple-600-4 p-6 bg-gray-100 rounded shadow-xl'>
              <div class='text-center mb-4 opacity-90'>
                <a
                  href='https://www.linkedin.com/in/alexarobertss'
                  class='block relative'
                >
                  <img alt='profil' src={Wayne}
                  class="mx-auto object-cover rounded-full h-28 w-28 "/>
                </a>
              </div>
              <h4 class='text-xl font-bold leading-snug tracking-tight mb-1'>
                Alexa Roberts
              </h4>
              <p class='text-gray-600 text-center'>Software Engineer</p>
              <div class='pt-3 flex border-t border-gray-200 w-44 mt-3 mb-0 mx-auto text-gray-600 items-center justify-evenly'>
                <a href='https://github.com/alexarobertss'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    class='text-xl hover:text-violet-700 dark:hover:text-[#B1DCA7] transition-colors active:bg-violet-700 focus:bg-violet-700 duration-150'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z'></path>
                  </svg>
                </a>
                <a href='http://www.linkedin.com/in/alexarobertss'>
                  <svg
                    width='20'
                    height='20'
                    fill='currentColor'
                    class='text-xl hover:text-violet-700 dark:hover:text-[#B1DCA7] transition-colors active:bg-violet-700 focus:bg-violet-700 duration-80'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z'></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* 2nd item */}
            <div class='relative flex flex-col items-center .border-purple-600-4 p-6 bg-gray-100 rounded shadow-xl'>
              <div class='text-center mb-4 opacity-90'>
                <a
                  href='https://www.linkedin.com/in/carol-xia-2bb508134/'
                  class='block relative'
                >
                  <img alt='profil' src={Wayne}
                  class="mx-auto object-cover rounded-full h-28 w-28 "/>
                </a>
              </div>
              <h4 class='text-xl font-bold leading-snug tracking-tight mb-1'>
                Carol Xia
              </h4>
              <p class='text-gray-600 text-center'>Software Engineer</p>
              <div class='pt-3 flex border-t border-gray-200 w-44 mt-3 mb-0 mx-auto text-gray-600 items-center justify-evenly'>
                <a href='https://github.com/carol-xia'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    class='text-xl hover:text-violet-700 dark:hover:text-[#B1DCA7] transition-colors active:bg-violet-700 focus:bg-violet-700 duration-150'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z'></path>
                  </svg>
                </a>
                <a href='https://www.linkedin.com/in/carol-xia-2bb508134/'>
                  <svg
                    width='20'
                    height='20'
                    fill='currentColor'
                    class='text-xl hover:text-violet-700 dark:hover:text-[#B1DCA7] transition-colors active:bg-violet-700 focus:bg-violet-700 duration-80'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z'></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* 3rd item */}
            <div class='relative flex flex-col items-center .border-purple-600-4 p-6 bg-gray-100 rounded shadow-xl'>
              <div class='text-center mb-4 opacity-90'>
                <a
                  href='https://www.linkedin.com/in/jamesminhbui/'
                  class='block relative'
                >
                  <img alt='profil' src={Wayne}
                  class="mx-auto object-cover rounded-full h-28 w-28 "/>
                </a>
              </div>
              <h4 class='text-xl font-bold leading-snug tracking-tight mb-1'>
                James Bui
              </h4>
              <p class='text-gray-600 text-center'>Software Engineer</p>
              <div class='pt-3 flex border-t border-gray-200 w-44 mt-3 mb-0 mx-auto text-gray-600 items-center justify-evenly'>
                <a href='https://github.com/James-Minh-Bui'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    class='text-xl hover:text-violet-700 dark:hover:text-[#B1DCA7] transition-colors active:bg-violet-700 focus:bg-violet-700 duration-150'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z'></path>
                  </svg>
                </a>
                <a href='https://www.linkedin.com/in/jamesminhbui/'>
                  <svg
                    width='20'
                    height='20'
                    fill='currentColor'
                    class='text-xl hover:text-violet-700 dark:hover:text-[#B1DCA7] transition-colors active:bg-violet-700 focus:bg-violet-700 duration-80'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z'></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* 4th item */}
            <div class='relative flex flex-col items-center .border-purple-600-4 p-6 bg-gray-100 rounded shadow-xl'>
              <div class='text-center mb-4 opacity-90'>
                <a
                  href='https://www.linkedin.com/in/wayne-tsai45/'
                  class='block relative'
                >
                  <img alt='profil' src={Wayne}
                  class="mx-auto object-cover rounded-full h-28 w-28 "/>
                </a>
              </div>
              <h4 class='text-xl font-bold leading-snug tracking-tight mb-1'>
                Wayne Tsai
              </h4>
              <p class='text-gray-600 text-center'>Software Engineer</p>
              <div class='pt-3 flex border-t border-gray-200 w-44 mt-3 mb-0 mx-auto text-gray-600 items-center justify-evenly'>
                <a href='https://github.com/WayneTsai45'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    class='text-xl hover:text-violet-700 dark:hover:text-[#B1DCA7] transition-colors active:bg-violet-700 focus:bg-violet-700 duration-150'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z'></path>
                  </svg>
                </a>
                <a href='https://www.linkedin.com/in/wayne-tsai45/'>
                  <svg
                    width='20'
                    height='20'
                    fill='currentColor'
                    class='text-xl hover:text-violet-700 dark:hover:text-[#B1DCA7] transition-colors active:bg-violet-700 focus:bg-violet-700 duration-80'
                    viewBox='0 0 1792 1792'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
