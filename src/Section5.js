import React from 'react';
import preview from './hagrid.jpg';
import sectionStyles from './Section.module.scss';

export default function Section5() {
  return (
    <section style={{ backgroundColor: '#F8EBF5' }}>
      <div className={sectionStyles.backgroundImages}>
        <img
          className={sectionStyles.leftImage}
          alt="left-scribble"
          style={{ top: '650px', left: '-210px' }}
          src="https://hagrid.io/assets/images/scribble-5.svg"
        />
        <img
          className={sectionStyles.rightImage}
          alt="right-scribble"
          style={{ top: '-100px', right: '-145px' }}
          src="https://hagrid.io/assets/images/scribble-4.svg"
        />
      </div>
      <div className={sectionStyles.headerContent}>
        <h1>See hagrid in action</h1>
        <h2>
          Ask us anything you'd like, we're using hagrid to put this FAQ up
        </h2>
      </div>
      <div className={sectionStyles.bodyContent}>
        <img
          alt="hagrid-preview"
          style={{ width: '1000px', height: '1708px' }}
          src={preview}
        />
      </div>
    </section>
  );
}
