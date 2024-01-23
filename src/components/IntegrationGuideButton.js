import React from 'react';
import styles from './IntegrationGuideButton.module.scss';

export default function IntegrationGuideButton(props) {
  return (
    <div className={styles.integrationButton}>
      <img className={styles.integrationIcon} src={props.iconUrl} />
    </div>
  );
}
