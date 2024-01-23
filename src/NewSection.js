import React from 'react';
import styles from './NewSection.module.scss';

export default function NewSection(props) {
  return (
    <section style={{ backgroundColor: props.bgColor }}>
      <div className={styles.backgroundImages}>
        <img
          className={styles.leftImage}
          alt="left-scribble"
          style={props.leftImageStyle}
          src={props.leftImage}
        />
        <img
          className={styles.rightImage}
          alt="right-scribble"
          style={props.rightImageStyle}
          src={props.rightImage}
        />
      </div>
      <div className={styles.headerContent}>
        <h1>{props.h1}</h1>
        <h2>{props.h2}</h2>
      </div>
      <div className={styles.bodyContent}>{props.sectionContent}</div>
    </section>
  );
}
