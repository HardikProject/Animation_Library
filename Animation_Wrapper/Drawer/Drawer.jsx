import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

function drawer({ drawerActive, setDrawerActive, children, className }) {
  return (
    <div className={className}>
      <AnimatePresence>
        {drawerActive && (
          <>
            <motion.div
              drag="y"
              className="drawer-wrapper"
              onDragEnd={(_, info) => {
                if (info.point.y > 300) setDrawerActive(false);
              }}
              dragConstraints={{ top: 0, bottom: 0 }}
            >
              <motion.div
                initial={{ opacity: 0.5, y: '110%' }}
                exit={{ opacity: 0.5, y: '110%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', damping: 25 }}
              >
                <div className="drawer">
                  <button
                    onClick={() => setDrawerActive(false)}
                    className="drawer--close"
                  >
                    X
                  </button>
                  {children}
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              onClick={() => setDrawerActive(false)}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="drawer--background"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export const Drawer = styled(drawer)`
  .drawer-wrapper {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 200;
    height: 85vh;
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
    z-index: 200;
  }

  /* First item will never have margin top */
  .drawer > *:first-child {
    margin-top: 0;
  }

  /* Last item will never have margin bottom */
  .drawer > *:last-child {
    margin-bottom: 0;
  }

  .drawer--close {
    --size: 30px;
    background: #ff5470;
    color: white;
    width: var(--size);
    height: var(--size);
    text-align: center;
    padding: 0;
    border-radius: var(--size);
    position: absolute;
    top: calc(var(--size) / 2 * -1);
    right: 10px;
    border: 3px solid transparent;
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
