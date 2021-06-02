import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function stickyDrawer({ children, className }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={className}>
      <motion.div
        style={{
          pointerEvents: isActive ? 'all' : 'none',
        }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 300) setIsActive(false);
          if (info.offset.y < -300) setIsActive(true);
        }}
        className="drawer-wrapper"
      >
        <motion.div
          style={{
            pointerEvents: 'all',
          }}
          animate={{ opacity: 1, y: isActive ? 0 : '65vh' }}
          transition={{ damping: 25, type: 'spring' }}
        >
          <div className="drawer">{children}</div>
        </motion.div>
      </motion.div>
      <motion.div
        style={{
          pointerEvents: isActive ? 'all' : 'none',
        }}
        className="drawer--background"
        onClick={() => setIsActive(false)}
        animate={{ opacity: isActive ? 1 : 0 }}
      />
    </div>
  );
}

export const StickyDrawer = styled(stickyDrawer)`
  .drawer-wrapper {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 100;
    height: 80vh;
  }

  .drawer {
    height: calc(100vh + 400px);
    padding: 2em;
    padding-bottom: 400px;
    background: white;
    /* border: 3px solid #000; */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 10px 10px 0 0;
  }

  /* First item will never have margin top */
  .drawer > *:first-child {
    margin-top: 0;
  }

  /* Last item will never have margin bottom */
  .drawer > *:last-child {
    margin-bottom: 0;
  }

  .drawer--background {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`;
