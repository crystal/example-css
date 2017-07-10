import React, { Component } from 'react';

import styles from './Home.css';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.contact}>
        <section>
          <h1>Home</h1>
          <p>This is some text...</p>
        </section>
      </div>
    );
  }
}


export default HomePage;
