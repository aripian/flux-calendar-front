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
    const {saveBook} = this.props.actions;
    return saveBook().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
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
CalendarBody.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(CalendarBody);
