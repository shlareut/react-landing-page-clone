import React from 'react';
import Button from './components/Button';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img
            alt="hagrid-logo"
            src="https://hagrid.io/assets/images/hagrid-logo-alt.svg"
          />
        </div>
        <ul className={styles.linkList}>
          <li>
            <Button text="Integrations" variant="variant3" />
          </li>
          <li>
            <Button text="Pricing" variant="variant3" />
          </li>
          <li>
            <Button text="Log In" variant="variant3" />
          </li>
          <li>
            <Button text="Try for Free" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
