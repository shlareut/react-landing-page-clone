import React from 'react';
import styles from './TestimonialBox.module.scss';

export default function TestimonialBox(props) {
  return (
    <div className={styles.testimonialBox}>
      <p className={styles.testimonialText}>{props.text}</p>
      <div className={styles.testimonialCredentialBox}>
        <img alt="profile-avatar" src={props.avatar} />
        <div className={styles.testimonialCredentials}>
          <p className={styles.credentialsName}>{props.name}</p>
          <p className={styles.credentialsProfession}>{props.profession}</p>
        </div>
      </div>
    </div>
  );
}
