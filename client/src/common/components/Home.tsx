import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Home = () => {
  // test, added style here just to see the classes work
  return (
    <main className="bg-primary_bg_color text-primary_title_color font-sans overflow-x-hidden mt-laptopHeaderHeight tablet_md_max:mt-mobileHeaderHeight py-paddingAroundtheContent ">
      <section className="flex justify-evenly px-laptopPxAroundtheContent tablet_md_max:px-mobileHeaderHeight mb-20">
        <div className="flex flex-col justify-between tablet_md_max:items-center">
          <div className="mt-7 font-bold">
            <h1 className="lg:text-7xl tablet_l_max:text-5xl tablet_md_max:text-center mobile_m_max:hidden">
              Senpai Kohai
            </h1>
            <p className="mt-5 text-2xl tablet_l_max:text-xl mobile_m_max:hidden">
              Find your guide, Support youngs
            </p>
            {/* ↓ for mobile version */}
            <h1 className="text-center text-4xl mobile_m:hidden">
              Senpai Kohai
            </h1>
            <p className="mt-5 text-lg text-center mobile_m:hidden">
              Find your guide, Support youngs
            </p>
          </div>
          <img
            className="w-80 my-8 md:hidden"
            src="./assets/shared_workspace.svg"
            alt="shared_workspace"
          />
          <div className="flex mt-5 items-center text-lg mobile_m_max:text-sm">
            <FaQuestionCircle />
            <p className="underline cursor-pointer ml-2">
              What are Senpai and Kohai?
            </p>
          </div>
          <Link
            to="/signup"
            className="tablet_md_max:w-full tablet_md_max:flex tablet_md_max:justify-center"
          >
            <button
              className="cursor-pointer 
								mt-5 
								py-3.5
								w-48
								text-primary_bg_color 
								bg-primary_title_color 
								rounded-full 
								font-black
								hover:bg-secondary_bg_color 
								md:text-lg
								tablet_md_max:w-80
								mobile_m_max:hidden
								tablet_l_max:p-2.5
								"
            >
              Join Now
            </button>
            {/* ↓ for mobile version */}
            <button
              className="cursor-pointer 
								mt-5 
								py-2.5
								w-56
								text-primary_bg_color 
								bg-primary_title_color 
								rounded-full 
								font-black
								hover:bg-secondary_bg_color 
								mobile_m:hidden
								"
            >
              Join Now
            </button>
          </Link>
        </div>
        <img
          className="w-7/12 tablet_md_max:hidden"
          src="./assets/shared_workspace.svg"
          alt="shared_workspace"
        />
      </section>
      <section className="p-10 md:p-20 relative">
        <h2 className="text-2xl md:text-5xl text-center font-bold mb-10 md:mb-20">
          About
        </h2>
        <div className="text-md md:text-2xl max-w-screen-lg mx-auto relative z-10">
          <p className="mb-4">
            Volutpat enim commodo condimentum diam pellentesque egestas.
          </p>
          <p className="mb-4">
            Ut tellus viverra amet, ullamcorper mattis eget proin feugiat.
            Suspendisse diam egestas vulputate tristique amet convallis. Ipsum
            viverra sagittis fusce interdum dis.
          </p>
          <p className="mb-4">Dolor cursus viverra tincidunt sed.</p>
        </div>
        <img
          src="./assets/BlobL.svg"
          alt="blob-l"
          className="absolute w-48 h-48 md:w-72 md:h-72 xl:w-full xl:h-full top-1/3 md:top-1/4 -left-14 xl:-left-1/2"
        />
        <img
          src="./assets/BlobR.svg"
          alt="blob-r"
          className="absolute w-48 h-48 md:w-72 md:h-72 xl:w-full xl:h-full top-1/4 -right-14 xl:-top-0 xl:-right-1/2"
        />
      </section>
      <section className="p-10 md:p-20">
        <h2 className="text-2xl font-bold text-center md:text-5xl">Q&As</h2>
        <Accordion className="p-10 text-sm md:text-2xl w-auto">
          <AccordionItem className="p-5">
            <AccordionItemHeading>
              <AccordionItemButton>
                Who is Senpai for Kohai ?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                dolorum! Iste assumenda molestias, rerum provident eos
                consequatur voluptatibus aut repudiandae? Hic repudiandae eos
                eveniet amet sit architecto nostrum vitae ipsam.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="p-5">
            <AccordionItemHeading>
              <AccordionItemButton>Why you need Senpai ?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                dolorum! Iste assumenda molestias, rerum provident eos
                consequatur voluptatibus aut repudiandae? Hic repudiandae eos
                eveniet amet sit architecto nostrum vitae ipsam. dolorum! Iste
                assumenda molestias, rerum provident eos consequatur
                voluptatibus aut repudiandae? Hic repudiandae eos eveniet amet
                sit architecto nostrum vitae ipsam.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="p-5">
            <AccordionItemHeading>
              <AccordionItemButton>How does it work ?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="p-5">
            <AccordionItemHeading>
              <AccordionItemButton>
                What you can do for Kohais ?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
                dolorum! Iste assumenda molestias, rerum provident eos
                consequatur voluptatibus aut repudiandae? Hic repudiandae eos
                eveniet amet sit architecto nostrum vitae ipsam.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="p-10">
        <h2 className="text-2xl md:text-5xl font-bold text-center">Contact</h2>
        <div className="md:flex md:p-10 p-10 md: grid justify-items-stretch">
          <img
            className="md:w-3/6 w-3/4 md:p-20 justify-self-center"
            src="./assets/contact.svg"
            alt="contact"
          />

          <p className="text-center mt-10 md:mt-24 md:p-10  text-base md:text-2xl">
            Please reach at xxxx@xxxx.com <br />
            Thank you!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
