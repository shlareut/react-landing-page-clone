import React from 'react';
import styles from './ExternalLinkSection.module.scss';

export default function ExternalLinkSection() {
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        On your website in less than 10 minutes
        <img
          className={styles.leftImage}
          src="https://hagrid.io/assets/images/wavy-line.svg"
        />
        <img
          className={styles.rightImage}
          src="https://hagrid.io/assets/images/wavy-line.svg"
        />
      </div>
      <div className={styles.boxes}>
        <div className={styles.box}>Box</div>
        <div className={styles.box}>Box</div>
        <div className={styles.box}>Box</div>
        <div className={styles.box}>Box</div>
        <div className={styles.box}>Box</div>
        <div className={styles.box}>Box</div>
        <div className={styles.box}>Box</div>
      </div>
    </div>
  );
}
