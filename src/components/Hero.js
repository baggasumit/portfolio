import React from 'react';
import { name, desc } from '../content/aboutMe.json';

const Hero = () => {
  return (
    <section className="hero">
      <h1>
        > {name}
        <div className="cursor" />
      </h1>
      <p>{desc}</p>
    </section>
  );
};

export default Hero;
