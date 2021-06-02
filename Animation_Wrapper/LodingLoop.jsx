import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function loadingLoop({ children, className }) {
  return (
    <div className={className}>
      <motion.div className="loading">
        {children}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: 'mirror',
          }}
          style={{
            background: '#00ebc7',
            height: 6,
            width: 100,
          }}
        />
        <motion.div
          initial={{ x: -100, y: -5 }}
          animate={{ x: 100, y: -5 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            repeatType: 'mirror',
          }}
          style={{
            background: '#ff5470',
            height: 8,
            width: 20,
          }}
        />
        <motion.div
          initial={{ x: -100, y: -5 }}
          animate={{ x: 100, y: -5 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            repeatType: 'mirror',
          }}
          style={{
            background: '#fde24f',
            height: 5,
            width: 200,
          }}
        />
      </motion.div>
    </div>
  );
}

export const LoadingLoop = styled(loadingLoop)`
  .loading {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #00214d;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
