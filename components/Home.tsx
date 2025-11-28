import React from 'react';
import Hero from './Hero';
import Services from './Services';
import ProblemSolution from './ProblemSolution';
import Process from './Process';
import About from './About';
import Portfolio from './Portfolio';
import Pricing from './Pricing';

const Home: React.FC = () => {

  return (
    <>
      <Hero />
      <Services />
      <ProblemSolution />
      <Process />
      <About />
      <Portfolio />
      <Pricing />
    </>
  );
};

export default Home;