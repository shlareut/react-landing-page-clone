import React from 'react';
import sectionStyles from './NewSection.module.scss';
import styles from './Section4.module.scss';

export default function Section4() {
  return (
    <section style={{ backgroundColor: '#EEF7ED' }}>
      <div className={sectionStyles.backgroundImages}>
        <img
          className={sectionStyles.leftImage}
          alt="left-scribble"
          style={{ top: '-130px', left: '-175px' }}
          src="https://hagrid.io/assets/images/scribble-10.svg"
        />
      </div>
      <div className={sectionStyles.headerContent}>
        <h1>Powerful and Simple. Gets things done!</h1>
        <h2>
          The hagrid dashboard puts everything you need to manage your QnA, at
          your fingertips.
        </h2>
      </div>
      <div className={sectionStyles.bodyContent}>
        <video
          src="https://hagrid.io/assets/images/clip-1.mp4"
          autoPlay
          muted
          loop
        />
        <h3>
          Answer questions privately or notify users (even after they have
          left), and post rich replies to questions
        </h3>
      </div>
    </section>
  );
}
