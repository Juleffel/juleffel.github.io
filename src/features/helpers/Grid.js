import React from 'react';
import Masonry from 'react-masonry-css'
import styles from './Grid.module.css';

export function Grid(props) {
  const breakpointColumnsObj = {
    default: 4,
    1800: 3,
    1200: 2,
    600: 1
  };

  return <Masonry
    breakpointCols={breakpointColumnsObj}
    className={styles.grid}
    columnClassName={styles.column}>
    {props.children}
  </Masonry>
}