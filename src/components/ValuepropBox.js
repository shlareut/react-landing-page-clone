import React from 'react';
import styles from './ValuepropBox.module.scss';

export default function ValuepropBox(props) {
  return (
    <div className={styles.valueProp}>
      <img src={props.url} />
      <p className={styles.imageTitle}>{props.title}</p>
      <p className={styles.imageSubTitle}>{props.subTitle}</p>
    </div>
  );
}
