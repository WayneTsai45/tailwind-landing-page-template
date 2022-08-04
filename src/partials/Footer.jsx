import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div class='max-w-6xl mx-auto px-4 sm:px-6'>
        <div class='grid sm:grid-cols-12 gap-3 py-3 md:py-3 border-t border-gray-900'>
          <div class='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <ul class='text-sm'>
              <li class='mb-0'>
                <a
                  href='/'
                  class='text-gray-900 hover:text-[#B1DCA7] transition duration-150 ease-in-out'
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div class='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <ul class='text-sm'>
              <li class='mb-0'>
                <a
                  href='#team'
                  class='text-gray-900 hover:text-[#B1DCA7] transition duration-150  ease-in-out'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div class='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <ul class='text-sm'>
              <li class='mb-0'>
                <a
                  href='https://medium.com'
                  class='text-gray-900 hover:text-[#B1DCA7] transition duration-150 ease-in-out'
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div class='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <ul class='text-sm'>
              <li class='mb-0'>
                <a
                  href='https://github.com/oslabs-beta/squeezed/issues'
                  class='text-gray-900 hover:text-[#B1DCA7] transition duration-150 ease-in-out'
                >
                  Report Issues
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id='bottom-area'
          class='md:flex md:items-center md:justify-between py-4 border-t border-gray-900'
        >
          <ul class='flex mb-4 md:order-1 md:ml-4 md:mb-0'>
            <li>
              <a
                href='https://medium.com'
                class='flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
                aria-label='Medium'
              >
                <svg
                  class='w-8 h-8 fill-current'
                  viewBox='-4 -5 32 32'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-2.426 14.741h-3.574v-.202l1.261-1.529c.134-.139.195-.335.162-.526v-5.304c.015-.147-.041-.293-.151-.392l-1.121-1.35v-.201h3.479l2.689 5.897 2.364-5.897h3.317v.201l-.958.919c-.083.063-.124.166-.106.269v6.748c-.018.103.023.206.106.269l.936.919v.201h-4.706v-.201l.969-.941c.095-.095.095-.123.095-.269v-5.455l-2.695 6.844h-.364l-3.137-6.844v4.587c-.026.193.038.387.174.526l1.26 1.529v.202z'></path>
                </svg>
              </a>
            </li>
            <li class='ml-4'>
              <a
                href='https://github.com/oslabs-beta/squeezed'
                class='flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
                aria-label='Github'
              >
                <svg
                  class='w-8 h-8 fill-current'
                  viewBox='4 4 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z'></path>
                </svg>
              </a>
            </li>
            <li class='ml-4'>
              <a
                href='https://www.linkedin.com/in/squeezed/' 
                class='flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
                aria-label='LinkedIn'
              >
                <svg
                  class='w-8 h-8 fill-current flex justify-center items-center'
                  viewBox='-8 -6 40 40'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'></path>
                </svg>
              </a>
            </li>
          </ul>
          <div class='text-sm text-gray-600 mr-4'>
            Made by{' '}
            <a class='text-blue-600 hover:underline' href='/'>
              Squeezed
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
