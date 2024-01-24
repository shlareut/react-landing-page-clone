import React from 'react';
import Button from './components/Button';
import sectionStyles from './Section.module.scss';
import styles from './Section7.module.scss';

export default function Section7() {
  return (
    <section style={{ backgroundColor: '#F8DEDE' }}>
      <div className={sectionStyles.backgroundImages}>
        <img
          className={sectionStyles.leftImage}
          alt="left-scribble"
          style={{ top: '-100px', left: '550px' }}
          src="https://hagrid.io/assets/images/scribble-stars.svg"
        />
        <img
          className={sectionStyles.rightImage}
          alt="right-scribble"
          style={{ top: '80px', right: '350px' }}
          src="https://hagrid.io/assets/images/scribble-1.svg"
        />
      </div>
      <div className={sectionStyles.headerContent}>
        <h1>Unlimited everything always</h1>
        <h2>One simple plan. No limits. Pay annually and save.</h2>
      </div>
      <div className={sectionStyles.bodyContent}>
        <div className={styles.popularTag}>MOST POPULAR</div>
        <div className={styles.priceBoxWrapper}>
          <div className={styles.priceBox}>
            <div className={styles.priceDetails}>
              <div className={styles.cadence}>Monthly</div>
              <div className={styles.priceTag}>
                $9.99 <span className={styles.priceSuffix}>/month</span>
              </div>
              <div className={styles.billingPeriod}>Billed monthly</div>
              <Button text="Try for Free" />
            </div>
          </div>
          <div className={styles.priceBox}>
            <div className={styles.priceDetails}>
              <div className={styles.cadence}>Yearly</div>
              <div className={styles.priceTag}>
                $7.99 <span className={styles.priceSuffix}>/month</span>
              </div>
              <div className={styles.billingPeriod}>Billed at $95.88 /year</div>
              <Button text="Try for Free" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
