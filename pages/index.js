import React, {Component} from 'react';
import Head from '../components/Head';
import CalendarBody from '../components/CalendarBody';
import {initStore} from '../stores/initializeStore';
import withRedux from 'next-redux-wrapper';
import '../styles/styles.css';

class Index extends Component {
  render() {
    return (
      <div>
        <Head title="room reservation"/>
        <div>
        </div>
        <CalendarBody />
      </div>
    );
  }
}

export default withRedux(initStore)(Index);
