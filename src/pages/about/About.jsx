import React, { Component } from 'react';

import styles from './About.css';

class AboutPage extends Component {
  render() {
    return (
      <div className={styles.about}>
        <section>
          <h1>About</h1>
          <p>This is some text...</p>
        </section>
      </div>
    );
  }
}


export default AboutPage;
