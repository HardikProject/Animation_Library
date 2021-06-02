import React from 'react';
import { motion } from 'framer-motion';
import useWindowScrollPosition from '@rehooks/window-scroll-position';
import styled from 'styled-components';
function scrollPosition({ className }) {
  const { y } = useWindowScrollPosition({
    throttle: 20,
  });
  return (
    <div className={className}>
      <motion.header
        style={{ justifyContent: y > 40 ? 'center' : 'flex-start' }}
        animate={{
          background: y > 40 ? '#00214d' : '#ff5470',
          color: y > 40 ? 'white' : '#00214d',
        }}
      >
        <motion.h1 className="fake-logo" layout>
          Level Up
        </motion.h1>
      </motion.header>
      <ul>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
        <li>dsfhijgoisfdhghsdfgijshdfg</li>
      </ul>
    </div>
  );
}

export const ScrollPosition = styled(scrollPosition)`
  .grid {
    --gridCols: 2;
    display: block;
    grid-gap: 20px;
    width: auto;
    margin: 0 auto;
    grid-template-columns: repeat(var(--gridCols), 1fr);
  }

  .gallery img {
    width: 100%;
    height: auto;
  }

  header {
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 10vh;
    background: #00214d;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }
`;
