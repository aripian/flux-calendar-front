// import React from 'react';
import axios from 'axios';
import * as types from '../constants/FormsActionType';
// import moment from 'moment';

export const getQuote = (detail) => async (dispatch, getState) => { // eslint-disable-line
  return await new Promise((resolve, reject) => { // eslint-disable-line
    const data = getState().form.queryForm.values;

    // if (data.policyNo.toUpperCase().startsWith('VPP')) {
    //   const policyNo = data.policyNo.split('/');
    //   data.policyNo = policyNo[1];
    // }

    dispatch({
      type: types.SET_INFO,
      payload: data
    });

    axios.get(`https://bankinfo.axaflexidrive.com/api/view?custIC=${data.nricPass}&custReg=${data.vehNo}`)
      .then(function (response) {
        const resData = response.data.data[0];
        console.log(resData);

        if (resData) {
          if (resData.bankinfo === 'TRUE') {
            resolve('Data Exist');
          }
          if (resData.branch_name === null) {
            resolve('Branch Missing');
          }
          dispatch({
            type: types.QUOTE_DATA,
            payload: resData
          });
        }

        resolve(resData);
      })
      .catch(function (err) {
        reject(err);
      });
  });
};

export const sendDetails = (detail) => async (dispatch, getState) => { // eslint-disable-line
  return await new Promise((resolve, reject) => { // eslint-disable-line
    const data = getState().form.queryForm.values;
    const custId = getState().details.custid;
    const branch = getState().details.branch;

    axios.get(`https://bankinfo.axaflexidrive.com/api/writ?custid=${custId}&bname=${data.bankName}&bbranch=${branch.replace(' ', '%20')}&bnum1=${data.bankAccNo}&vehNo=${data.vehNo}`)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (err) {
        reject(err);
      });
  });
};

export const saveDetails = (detail) => async (dispatch, getState) => { // eslint-disable-line
  return await new Promise((resolve, reject) => { // eslint-disable-line
    const data = getState().form.queryForm.values;
    dispatch({
      type: types.SAVE_DETAILS,
      payload: data
    });

    resolve();
  });
};

export const setIdType = (value) => async(dispatch, getState) => { // eslint-disable-line
  return await new Promise((resolve, reject) => { // eslint-disable-line
    dispatch({
      type: types.SET_ID_TYPE,
      value
    });
    resolve();
  });
};

export const updateTNC = (field, value) => async (dispatch, getState) => { // eslint-disable-line
  return await new Promise((resolve, reject) => { // eslint-disable-line
    dispatch({
      type: types.UPDATE_TNC,
      field,
      value
    });
    resolve();
  });
};
