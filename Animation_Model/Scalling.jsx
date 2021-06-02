import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function scalling({ className }) {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className={className}>
      <main className="layout">
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        <motion.div layout className="card">
          <motion.h4 layout>Post Number one</motion.h4>
          {isToggled && (
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              natus perspiciatis voluptatibus nulla, consequuntur harum
              similique sit itaque doloribus eius quo? Sequi eius est impedit
              praesentium magnam adipisci libero dolore, repellendus molestiae
              numquam voluptate itaque totam laborum in ipsam reprehenderit
              maxime asperiores eveniet culpa veniam at cumque neque labore
              aperiam!
            </p>
          )}
        </motion.div>
      </main>
    </div>
  );
}

export const Scalling = styled(scalling)`
  .card {
    padding: 2em;
    background: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    margin-bottom: 2rem;
    border-radius: 10px;
  }

  /* First item will never have margin top */
  .card > *:first-child {
    margin-top: 0;
  }

  /* Last item will never have margin bottom */
  .card > *:last-child {
    margin-bottom: 0;
  }
`;
