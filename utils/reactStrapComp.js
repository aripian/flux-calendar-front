import React, {Fragment} from 'react';
import {Input, FormFeedback, FormText} from 'reactstrap';
import {Typeahead} from 'react-bootstrap-typeahead';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class reactStrapForm {
  static renderField({input, meta: {touched, error, warning}, data, label, id, value, ...custom}) {
    return (
      <Fragment>
        {label ? <label htmlFor={input.name}>{label}</label> : ''}
        <Input {...(touched && error ? {invalid: true} : {})} {...input} {...custom} />
        {error && <FormFeedback>{error}</FormFeedback>}
        {!error && warning && <FormText>{warning}</FormText>}
      </Fragment>
    );
  }

  static renderSelectField({input, meta: {touched, error, warning}, options, label, id, ...custom}) {
    return (
      <Fragment>
        {label ? <label htmlFor={input.name}>{label}</label> : ''}
        <Input type="select" {...(touched && error ? {invalid: true} : {})} {...input} {...custom} >
          {
            options.map((item, index) => {
              return <option value={item.value} key={index}> {item.name} </option>;
            })
          }
        </Input>
        {error && <FormFeedback>{error}</FormFeedback>}
        {!error && warning && <FormText>{warning}</FormText>}
      </Fragment>
    );
  }

  static renderTypeAhead({input, meta: {touched, error, warning}, options, label, id, value, preload, typeAheadOnChange, ...custom}) {
    return (
      <Fragment>
        { label ? <label htmlFor={id}>{label}</label> : '' }
        <Typeahead {...(touched && error ? {invalid: true} : {})}
          isInvalid={touched && error}
          emptyLabel={''}
          labelKey="country"
          placeholder={label}
          options={options}
          multiple={true}
          {...custom}
          defaultSelected={input.value ? input.value : []}
          onChange={typeAheadOnChange} />
        <Input {...input} {...(touched && error ? {invalid: true} : {})}
          type="hidden" />
        {error && <FormFeedback>{error}</FormFeedback>}
        {!error && warning && <FormText>{warning}</FormText>}
      </Fragment>
    );
  }

  static renderDatePicker({input, meta: {touched, error, warning}, id, value, label, placeholder, type, className, selected, minDate, maxDate, ...custom}) {
    return (
      <Fragment>
        {label ? <label htmlFor={id}>{label}</label> : ''}
        <DatePicker
          selected={input.value ? moment(input.value) : null}
          placeholderText={placeholder}
          type={type}
          className={`${className} ${touched && error ? 'is-invalid' : ''}`}
          minDate={minDate}
          maxDate={maxDate}
          dateFormat="DD/MM/YYYY"
          id={id}
          // onBlur={input.onBlur}
          onChange={input.onChange}
          onFocus={input.onFocus}
          {...custom}
        />
        <Input {...input} {...(touched && error ? {invalid: true} : {})}
          type="hidden" />
        {touched && error && <span className="invalid-feedback">{error}</span>}
        {!error && warning && <span className="invalid-feedback">{warning}</span>}
      </Fragment>
    );
  }
}

export default reactStrapForm;
