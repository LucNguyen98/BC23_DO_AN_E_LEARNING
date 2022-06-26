import React from 'react';
import '../../../assets/scss/css/responsive.css';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Cta from './components/Cta';
import Features from './components/Features';
import PopularCourses from './components/PopularCourses';
import Statistics from './components/Statistics';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import WorkProcess from './components/WorkProcess';
import './Home.scss';

export default function Home() {
  return (
    <div id="top-header">
      <div>
        <Banner />
        <Statistics />
        <PopularCourses />
        <Categories />
        <WorkProcess />
        <PopularCourses customClass={['bg-gray']} />
        <Features />
        <Team />
        <Testimonial />
        <Cta />
      </div>
    </div>
  );
}
