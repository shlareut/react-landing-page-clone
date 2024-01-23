import React from 'react';
import styles from './IntegrationButton.module.scss';

export default function IntegrationButton(props) {
  return (
    <div className={styles.integrationButton}>
      <img className={styles.integrationIcon} src={props.iconUrl} />
    </div>
  );
}
