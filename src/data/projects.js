import increment from '../assets/projects/increment.png';
import favicon from '../assets/projects/favicon.png'
import logo88 from '../assets/projects/logo88new.png'
import abb from '../assets/projects/abblogo.png'
import ubc from '../assets/projects/ubc.png'
import shil from '../assets/projects/shillogo.jpg'


export const projects = [
  {
    title: 'Shil.me',
    desc: 'Lead Full Stack developer at Shil.me. The Project allows users to Display and interact with their NFTs. ',
    links: ['https://shil.me/'],
    logo: shil,
  },
  {
    title: 'Ithil Protocol',
    desc: 'Currently working contractually for Ithil to help build put their website. I am mainly focued on web3 aspect as well as testing smart contracts. Ithil is a generalised leveraged investments protocol allowing liquidity providers to stake any ERC20 token and earn fees. I am responsible for most web3 integrations.',
    logo: favicon,
    repo: 'https://github.com/Ithil-protocol/frontend',
  },
  {
    title: '88mph',
    desc: 'Created a new feature for 88mph’s protocol. Project further modularizes leveraged long and short positions in crypto, make them more accessible, and make use of yield tokens. I was the Full Stack developer in this project and worked with React, Javascript and solidity.',
    repo: 'https://github.com/88mphapp/Phantasm',
    logo: logo88,
  },
  {
    title: 'Increment (HackMoney Finalist)',
    desc: 'Lead Front-end Developer. Assisted in creating the vAMM as well as the Front-end and UI',
    links: ['https://increment.finance'],
    repo: 'https://github.com/Increment-Finance/increment-app',
    logo: increment,
  },
  {
    title: 'ABB',
    desc: "I worked with the company's web-crawling team where I helped obtain key competitor data using technologies like Selenium and Python. In addition I was also responsible for pre-processing competitors data before it was sent to the analytics team.",
    logo: abb,
  },
];

export const education = [
  {
    title: 'UBC',
    desc: 'Bachelor of Science with a Major in Computer Science.',
    year: '2018-2022',
    logo: ubc,
  },
];


