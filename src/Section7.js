import React from 'react';
import sectionStyles from './NewSection.module.scss';
import styles from './Section7.module.scss';

export default function Section7() {
  return (
    <section style={{ backgroundColor: '#F8DEDE' }}>
      <div className={sectionStyles.backgroundImages}>
        <img
          className={sectionStyles.leftImage}
          alt="left-scribble"
          style={{ top: '0px', left: '0px' }}
          src="https://hagrid.io/assets/images/scribble-stars.svg"
        />
        <img
          className={sectionStyles.rightImage}
          alt="right-scribble"
          style={{ top: '-100px', right: '-145px' }}
          src="https://hagrid.io/assets/images/scribble-1.svg"
        />
      </div>
      <div className={sectionStyles.headerContent}>
        <h1>Unlimited everything always</h1>
        <h2>One simple plan. No limits. Pay annually and save.</h2>
      </div>
      <div className={sectionStyles.bodyContent}>
        <div className={styles.priceBoxWrapper}>
          <div className={styles.priceBox}>
            <div className={styles.priceDetails}>
              <div className={styles.cadence}>Monthly</div>
              <div className={styles.priceWrapper}>1999</div>
              <div className={styles.billingPeriod}>Monthly</div>
              <div>Button</div>
            </div>
          </div>
          <div className={styles.priceBox}>Test</div>
        </div>
      </div>
    </section>
  );
}
