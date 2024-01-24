import React from 'react';
import Button from './components/Button';
import sectionStyles from './Section.module.scss';
import styles from './Section1.module.scss';

export default function Section1() {
  return (
    <section style={{ backgroundColor: '#f4e7e6', paddingTop: '228px' }}>
      <div className={sectionStyles.backgroundImages}>
        <img
          className={sectionStyles.leftImage}
          alt="left-scribble"
          style={{ top: '-50px', left: '-130px' }}
          src="https://hagrid.io/assets/images/scribble-3.svg"
        />
        <img
          className={sectionStyles.rightImage}
          alt="right-scribble"
          style={{ top: '-50px', right: '-170px' }}
          src="https://hagrid.io/assets/images/scribble-2.svg"
        />
      </div>
      <div className={sectionStyles.headerContent}>
        <h1 style={{ fontSize: '72px', lineHeight: '1', textAlign: 'center' }}>
          Social Q&A for <br /> any website
        </h1>
        <h2 style={{ fontSize: '27px' }}>
          No-code widget, to get visitors talking
        </h2>
      </div>
      <div className={sectionStyles.bodyContent}>
        <Button
          text="Try for Free"
          style={{ height: '70px', width: '200px' }}
        />
        <p className={styles.buttonSubText}>
          14 day trial. No credit card needed.
        </p>
        <div className={styles.screenshots}>
          <img
            alt="screenshot-1"
            src="https://hagrid.io/assets/images/hero-img-1.svg"
          />
          <img
            alt="screenshot-2"
            src="https://hagrid.io/assets/images/hero-img-2.svg"
          />
          <img
            alt="screenshot-3"
            src="https://hagrid.io/assets/images/hero-img-3.svg"
          />
        </div>
      </div>
    </section>
  );
}
