import React from 'react';
import IntegrationButton from './IntegrationButton';
import styles from './IntegrationGuidesSection.module.scss';

export default function ExternalLinkSection() {
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        On your website in less than 10 minutes
        <img
          className={styles.leftImage}
          alt="wavy-line-icon"
          src="https://hagrid.io/assets/images/wavy-line.svg"
        />
        <img
          className={styles.rightImage}
          alt="wavy-line-icon"
          src="https://hagrid.io/assets/images/wavy-line.svg"
        />
      </div>
      <div className={styles.boxes}>
        <IntegrationButton iconUrl="https://hagrid.io/assets/images/js-mono.svg" />
        <IntegrationButton iconUrl="https://hagrid.io/assets/images/webflow-mono.svg" />
        <IntegrationButton iconUrl="https://hagrid.io/assets/images/react-mono.svg" />
        <IntegrationButton iconUrl="https://hagrid.io/assets/images/wp-mono.svg" />
        <IntegrationButton iconUrl="https://hagrid.io/assets/images/wix-mono.svg" />
        <IntegrationButton iconUrl="https://hagrid.io/assets/images/shopify-mono.svg" />
        <IntegrationButton iconUrl="https://hagrid.io/assets/images/carrd-mono.svg" />
      </div>
    </div>
  );
}
