import React from 'react';
import styles from './ValuePropsComponent.module.scss';

export default function ValuePropsComponent() {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <img
          className={styles.leftImage}
          src="https://hagrid.io/assets/images/scribble-9.svg"
        />
        <img
          className={styles.rightImage}
          src="https://hagrid.io/assets/images/scribble-8.svg"
        />
        <div className={styles.title}>
          All of the results - none of the work!
        </div>
        <div className={styles.subTitle}>
          In 15 minutes get set for automatic SEO, social proof and meaningful
          engagement
        </div>
        <div className={styles.valuePropsList}>
          <div className={styles.valueProp}>
            <img src="https://hagrid.io/assets/images/authentication.svg" />
            <p className={styles.imageTitle}>Authenticated users</p>
            <p className={styles.imageSubTitle}>
              Socially authenticated posts. So no SPAM. Spend time on meaningful
              questions from high-intent visitors.
            </p>
          </div>
          <div className={styles.valueProp}>Box 2</div>
          <div className={styles.valueProp}>Box 3</div>
          <div className={styles.valueProp}>Box 4</div>
          <div className={styles.valueProp}>Box 5</div>
          <div className={styles.valueProp}>Box 6</div>
          <div className={styles.valueProp}>Box 7</div>
          <div className={styles.valueProp}>Box 8</div>
          <div className={styles.valueProp}>Box 9</div>
        </div>
      </div>
    </div>
  );
}
