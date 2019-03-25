// import React from 'react';
import axios from 'axios';
import * as types from '../constants/FormsActionType';
// import moment from 'moment';

export const saveBook = (detail) => async (dispatch, getState) => { // eslint-disable-line
  return await new Promise((resolve, reject) => { // eslint-disable-line
    const data = getState().form.calendarForm.values;

    dispatch({
      type: types.SET_BOOKING,
      payload: data
    });

    axios.post('http://localhost:5005/api/book-room', data)
      .then(function (response) {
        console.log(response);
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
