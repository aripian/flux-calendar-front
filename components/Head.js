import React from 'react';
import Header from 'next/head';
import PropTypes from 'prop-types';
import '../styles/styles.css';

const Head = props => (
  <div>
    <Header>
      <title>{props.title ? props.title : 'My page title'}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" /></Header>
  </div>
);

Head.propTypes = {
  title: PropTypes.string
};

export default Head;
