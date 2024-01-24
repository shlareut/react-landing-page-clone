import React from 'react';
import styles from './Button.module.scss';

export default function Button(props) {
  return <button style={props.style}>{props.text}</button>;
}
