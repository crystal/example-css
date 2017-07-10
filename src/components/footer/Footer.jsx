import React, { Component } from 'react';

import styles from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <section>
          Copyright &copy; 2017 Test, Inc.
        </section>
      </div>
    );
  }
}


export default Footer;
