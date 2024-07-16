'use client'
import React from 'react';
import MainNav from '../navigations/MainNav';
import SearchDiv from './burnerSection/SearchDiv';
import MainBurner from './burnerSection/MainBurner';
import AboutSection from './about/AboutSection';
import CheckoutPage from './about/CheckoutPage';
import SectionPage from './ServicesPage';
import NeighborhoodSection from './Neighborhood';
import TeamSection from './TeamSection';
import BlogSection from './BlogSection';
import TestmonialsSection from './TestmonialsSection';
import BecomAgent from './BecomAgent';
import FooterSection from './FooterSection';

const Burner = () => {
  return (
    <>
      <section className='w-[90%] self-center'>
        <MainNav />
        <div style={{
          borderRadius: " 0 0 50% 50%",
        }} className='container rounded-full h-[75vh] bg-gradient-to-b from-[#ffffff] from-20%  to-[#dcedf3] to-80%  flex flex-col w-full'>
          <div className='flex w-full mt-10'>
            <MainBurner />
            <SearchDiv />
          </div>
        </div>
      </section>
      <AboutSection />
      <CheckoutPage />
      <SectionPage />
      <NeighborhoodSection />
      <TeamSection />
      <BlogSection />
      <TestmonialsSection />
      <BecomAgent />
      <FooterSection />
    </>
  );
};

export default Burner;