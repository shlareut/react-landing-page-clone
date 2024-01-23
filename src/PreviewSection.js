import React from 'react';
import styles from './PreviewSection.module.scss';

export default function PreviewSection() {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <img
          className={styles.leftImage}
          alt="scribble-5"
          src="https://hagrid.io/assets/images/scribble-5.svg"
        />
        <img
          className={styles.rightImage}
          alt="scribble-4"
          src="https://hagrid.io/assets/images/scribble-4.svg"
        />
        <p className={styles.title}>See hagrid in action</p>
        <p className={styles.subTitle}>
          Ask us anything you'd like, we're using hagrid to put this FAQ up
        </p>
      </div>
    </div>
  );
}
