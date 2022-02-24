import React from "react";
import styles from '../assets/loginstyle.css';

const Footer = () => {
    return( <>
    <footer>
  <article className={styles.footer_column}></article>
    <div className={styles.copyright}>
      &copy;2021- <strong>Battlestats&nbsp;</strong>
    </div>
  </footer>
    </>


    )
}

export default Footer