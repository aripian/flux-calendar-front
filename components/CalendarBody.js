import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import CalendarForm from '../components/CalendarForm';
import * as actions from '../actions/FormActions';

class CalendarBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // priceQuote: {}
    };
  }

  formSubmit() {
    // const {getQuote} = this.props.actions;
    // return getQuote().then(res => {
    //   if (res === 'Data Exist') {
    //     alert('Sorry! Your bank details already exist. Kindly contact us at safedrvgdiscount@axa.com.my if you wish to change your bank details.'); // eslint-disable-line
    //   } else if (res === 'Branch Missing') {
    //     alert('Branch code is not found!'); // eslint-disable-line
    //   } else {
    //     if (res) { // eslint-disable-line
    //       Router.push('/bank-info');
    //     } else {
    //       alert('No Data Found!'); // eslint-disable-line
    //     }
    //   }
    // }).catch(err => {
    //   console.log(err);
    // });
  }

  render() {
    return (
      <div>
        <CalendarForm onSubmit={this.formSubmit.bind(this)} />
      </div>
    );
  }
}

// Uncomment this section if to be use in the future
CalendarForm.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(CalendarBody);
