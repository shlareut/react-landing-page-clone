import React from 'react';
import styles from './NavbarComponent.module.scss';

export default function navbarComponent() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img
            alt="hagrid-logo"
            src="https://hagrid.io/assets/images/hagrid-logo-alt.svg"
          />
        </div>
        <ul className={styles.linkList}>
          <li className={styles.listItem}>Integrations</li>
          <li className={styles.listItem}>Pricing</li>
          <li className={styles.listItem}>Log In</li>
          <li className={styles.button}>Try for Free</li>
        </ul>
      </div>
    </div>
  );
}
