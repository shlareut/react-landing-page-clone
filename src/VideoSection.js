import React from 'react';
import styles from './VideoSection.module.scss';

export default function VideoSection() {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <img
          className={styles.leftImage}
          alt="scribble-10"
          src="https://hagrid.io/assets/images/scribble-10.svg"
        />
        <p className={styles.title}>Powerful and Simple. Gets things done!</p>
        <p className={styles.subTitle}>
          The hagrid dashboard puts everything you need to manage your QnA, at
          your fingertips.
        </p>
      </div>
    </div>
  );
}
