import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

function loadingAnimated({ className }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={className}>
      <AnimateSharedLayout>
        <motion.header layoutId="header" onClick={() => setIsLoading(true)}>
          <motion.h1 layoutId="logo" className="fake-logo">
            Hardik Prajapati
          </motion.h1>
        </motion.header>

        <AnimatePresence>
          {isLoading && (
            <motion.div
              layoutId="header"
              className="loading"
              onClick={() => setIsLoading(false)}
            >
              <motion.h4 layoutId="logo">Hardik Prajapati</motion.h4>
              <motion.div exit={{ opacity: 0, transition: { duration: 0.1 } }}>
                {isLoading && <p>is Loading...</p>}
                <motion.div
                  initial={{ x: -100 }}
                  animate={{ x: 100 }}
                  transition={{
                    flip: Infinity,
                    duration: 1,
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
                    flip: Infinity,
                    duration: 1.2,
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
                    flip:Infinity,
                    duration: 1.5,
                  }}
                  style={{
                    background: '#fde24f',
                    height: 5,
                    width: 200,
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}
export const LoadingAnimated = styled(loadingAnimated)`
  header {
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 10vh;
    background: #00214d;
    box-shadow:  0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }
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
