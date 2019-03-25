import React from 'react';
import {Form, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import reactStrapForm from '../utils/reactStrapComp';
import validation from '../utils/validation';
import {setIdType} from '../actions/FormActions';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';

const localizer = BigCalendar.momentLocalizer(moment);

let CalendarForm = props => {
  const {
    handleSubmit,
    change
  } = props;

  const setIdType = (a, b) => {
    props.actions.setIdType(b);
    change('nricPass', '');
  };

  const fields = [
    <Field
      key="sfl-0"
      name="roomType"
      label="Select Room"
      title="roomType"
      component={reactStrapForm.renderSelectField}
      options={[{name: 'Single Room', value: 'single'}, {name: 'Double Room', value: 'double'}]}
      className="form-control"
      onChange={(a, b) => setIdType(a, b)}
    />,
    <Field
      key="sfl-1"
      id="datepicker_startDate"
      type="date"
      name="startDate"
      label="From"
      title="date"
      placeholder="Date"
      component={reactStrapForm.renderDatePicker}
      validate={validation.required}
      className="form-control select_form_min"
      autoComplete="off"
    />,
    <Field
      key="sfl-2"
      id="datepicker_startDate"
      type="date"
      name="stopDate"
      label="To"
      title="date"
      placeholder="Date"
      component={reactStrapForm.renderDatePicker}
      validate={validation.required}
      className="form-control select_form_min"
      autoComplete="off"
    />,
    <Field
      key="sfl-3"
      name="priceChange"
      label="Change Price"
      placeholder="Price"
      component={reactStrapForm.renderField}
      type="text"
      title="price"
      validate={validation.required}
    />,
    <Field
      key="sfl-4"
      name="availability"
      label="Availability"
      placeholder="availability"
      component={reactStrapForm.renderField}
      type="text"
      title="availability"
      validate={validation.required}
    />,
    <Button key="sfl-6" className="button-submit" type="submit">
      <span>Submit</span>
    </Button>
  ];

  const view = {
    default: <div className="unit-wrapper">
      <div>
        <div className="row">
          <div className="col-sm-12 pad-top">
            <div className="bold">Bulk Operations</div>
          </div>
        </div>
        <div className="row pad-top">
          <div className="col-sm-3 ic-pad">
            {fields[0]}
          </div>
        </div>
        <div className="row pad-top_10">
          <div className=" col-sm-12">
            <div className="bold-title">Select Days:</div>
          </div>
          <div className=" col-sm-3">
            {fields[1]}
          </div>
          <div className=" col-sm-3">
            {fields[2]}
          </div>
        </div>
        <div className="row pad-top_10">
          <div className=" col-sm-3">
            {fields[3]}
          </div>
          <div className=" col-sm-3">
            {fields[4]}
          </div>
        </div>
        <div className="row text-center pad-top">
          <div className="col-sm-12">
            {fields[5]}
          </div>
        </div>
        <div className="row pad-top_10">
          <div className="col-sm-12 calendar-wrap">
            <BigCalendar
              localizer={localizer}
              events={[]}
              startAccessor="start"
              endAccessor="end"
            />
          </div>
        </div>
      </div>
    </div>
  };

  return (
    <Form onSubmit={handleSubmit} >
      {view.default}
    </Form>
  );
};

CalendarForm.propTypes = {
  handleSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  actions: PropTypes.object,
  change: PropTypes.func,
  idType: PropTypes.string
};

CalendarForm = reduxForm({
  form: 'calendarForm',
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true
})(CalendarForm);

function mapStateToProps(state) {
  const {idType} = state.details;
  return {
    idType: state.details.idType,
    initialValues: {
      idType
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({setIdType}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarForm);
