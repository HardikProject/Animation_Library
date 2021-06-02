import React, { useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components';

function login({className}) {
  const [loggedIn, setIsLoggedIn] = useState('');
  return (
    <div className={className}>
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>
      <main className="layout">
        <button onClick={() => setIsLoggedIn('signin')}>Sign In</button>
        <AnimateSharedLayout>
          <AnimatePresence>
            {loggedIn && (
              <>
                <motion.div
                  className="modal"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                >
                  <motion.div layout className="card">
                    <AnimatePresence exitBeforeEnter>
                      {loggedIn === 'signin' && (
                        <SignIn key="signin" setIsLoggedIn={setIsLoggedIn} />
                      )}
                      {loggedIn === 'signup' && (
                        <SignUp key="signup" setIsLoggedIn={setIsLoggedIn} />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsLoggedIn('')}
                  className="overlay"
                />
              </>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </main>
    </div>
  );
}

function SignUp({ setIsLoggedIn }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3>Sign Up</h3>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <label htmlFor="email">Password</label>
      <input id="email" type="text" />
      <br />
      <button>Sign Up</button>
      <p>
        Already have an account?{' '}
        <a onClick={() => setIsLoggedIn('signin')}>Sign In</a>
      </p>
    </motion.div>
  );
}
function SignIn({ setIsLoggedIn }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3>Sign In</h3>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <label htmlFor="email">Password</label>
      <input id="email" type="text" />
      <label htmlFor="email2">Password Confirm</label>
      <input id="email2" type="text" />
      <br />
      <button>Sign In</button>
      <p>
        Need an account? <a onClick={() => setIsLoggedIn('signup')}>Sign Up</a>
      </p>
    </motion.div>
  );
}

export const LoginModel = styled(login)`
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
.layout {
  /* top padding header height + whatever visual padding we want */
  padding: 3rem 2.5%;
}
  label {
    display: block;
    font-size: 0.8rem;
  }

  input,
  textarea {
    padding: 4px 5px;
    border: solid 1px grey;
    border-radius: 4px;
  }

  textarea {
    width: 100%;
    height: 5rem;
  }

  button {
    --buttonColor: #00ebc7;
    appearance: none;
    color: #1b2d45;
    background-color: var(--buttonColor);
    border: none;
    border-radius: 10px;
    padding: 5px 25px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    transition: 0.3s ease-in-out box-shadow;
  }

  button:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

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

  .overlay {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .modal {
  position: fixed;
  width: 100%;
  height: calc(100% - 2rem);
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  pointer-events: none;
}

.modal .card {
  pointer-events: all;
  flex: 1;
  max-width: 500px;
  align-self: flex-start;
}
`;
