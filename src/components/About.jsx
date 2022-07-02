import React, { useState, useRef, useEffect } from 'react';
import { Matrix } from '.';
import Profile from '../assets/killua.png';

export default function About() {
  const profileContainer = useRef();
  const [matrixSize, setMatrixSize] = useState();

  useEffect(() => {
    if (profileContainer.current) {
      const width = profileContainer.current.offsetWidth;
      const height = profileContainer.current.offsetHeight;
      setMatrixSize(Math.min(width, height));
    }
  }, [profileContainer]);

  return (
    <div className="page" id="about">
      <div className="container">
        <div className="about">
          <h2>About</h2>
          <p>
            I’m a Front-End Developer in the growing Web3 ecosystem and I’ve
            been working on projects relating to DeFi, NFTs and DAOs since 2020.
            Since then I have worked with numerous Protocols and won multiple 
            Hackathons. My goal is to have a fundimental understanding of the entire 
            web3 stack and shift more towards backend development. Most recently I 
            have been working as a freelance developer at multiple companies to help 
            build out their Front-end code.
          </p>
        </div>
        <div className="profile" ref={profileContainer}>
          <img src={Profile} alt="Profile" id="profile-image" />
          <Matrix
            fontRatio={0.66}
            density={25}
            refreshRate={20}
            size={matrixSize}
          />
        </div>
      </div>
    </div>
  );
}
