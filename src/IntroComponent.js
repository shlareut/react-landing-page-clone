import React from 'react';
import styles from './IntroComponent.module.scss';

export default function IntroComponent() {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <img
          className={styles.leftImage}
          src="https://hagrid.io/assets/images/scribble-3.svg"
        />
        <img
          className={styles.rightImage}
          src="https://hagrid.io/assets/images/scribble-2.svg"
        />
        <p className={styles.title}>
          Social Q&A for <br /> any website
        </p>
        <p className={styles.subTitle}>
          No-code widget, to get visitors talking
        </p>
        <div className={styles.button}>Try for Free</div>
        <p className={styles.buttonSubText}>
          14 day trial. No credit card needed.
        </p>
        <div className={styles.screenshots}>
          <img src="https://hagrid.io/assets/images/hero-img-1.svg" />
          <img src="https://hagrid.io/assets/images/hero-img-2.svg" />
          <img src="https://hagrid.io/assets/images/hero-img-3.svg" />
        </div>
      </div>
    </div>
  );
}
