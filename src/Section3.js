import React from 'react';
import IntegrationGuideButton from './components/IntegrationGuideButton';
import sectionStyles from './Section.module.scss';
import styles from './Section3.module.scss';

export default function Section3() {
  return (
    <section style={{ backgroundColor: '#18181B' }}>
      <div className={sectionStyles.backgroundImages}>
        <img
          className={sectionStyles.leftImage}
          alt="left-scribble"
          style={{ top: '-75px', left: '90px' }}
          src="https://hagrid.io/assets/images/wavy-line.svg"
        />
        <img
          className={sectionStyles.rightImage}
          alt="right-scribble"
          style={{ top: '-75px', right: '90px' }}
          src="https://hagrid.io/assets/images/wavy-line.svg"
        />
      </div>
      <div className={sectionStyles.headerContent}>
        <h1 style={{ color: 'white', fontSize: '24px', marginBottom: '24px' }}>
          On your website in less than 10 minutes
        </h1>
      </div>
      <div className={sectionStyles.bodyContent}>
        <div className={styles.integrationGuideBoxes}>
          <IntegrationGuideButton iconUrl="https://hagrid.io/assets/images/js-mono.svg" />
          <IntegrationGuideButton iconUrl="https://hagrid.io/assets/images/webflow-mono.svg" />
          <IntegrationGuideButton iconUrl="https://hagrid.io/assets/images/react-mono.svg" />
          <IntegrationGuideButton iconUrl="https://hagrid.io/assets/images/wp-mono.svg" />
          <IntegrationGuideButton iconUrl="https://hagrid.io/assets/images/wix-mono.svg" />
          <IntegrationGuideButton iconUrl="https://hagrid.io/assets/images/shopify-mono.svg" />
          <IntegrationGuideButton iconUrl="https://hagrid.io/assets/images/carrd-mono.svg" />
        </div>
      </div>
    </section>
  );
}
