import {
    ADD_RESPONSE,
    RETRIEVE_RESPONSES,
    UPDATE_RESPONSE,
    DELETE_RESPONSE,
      //RETRIEVE_RESPONSE_BY_ID,
  
    
  } from "./types";
  import  FeedResponseService from "../services/FeedResponseService";
  
  export const addResponse = ({answer,accuracy,responseDateTime}) => async (dispatch) => {
    try {
      //first the call to back end server is happening
      //data of product type and we receive server response
  
      const res = await FeedResponseService.create({ answer,accuracy,responseDateTime});
  
      dispatch({
        type: ADD_RESPONSE,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const retrieveResponses = () => async (dispatch) => {
    try {
      const res = await FeedResponseService.getAll();
      dispatch({
        type: RETRIEVE_RESPONSES,
        payload:res.data,
      });
     
    
  }
  catch(err){return Promise.reject(err);}};
  
  
  /* export const retrieveResponseById = () => async (dispatch) => {
    try {
      const res = await ResponseService.getResponseById();
      dispatch({
        type: RETRIEVE_RESPONSE_BY_ID,
        payload:res.data,
      });
     
    
    }
    catch(err){return Promise.reject(err);}};
   */
  
  
  
  export const updateResponse = (respId, data ) => async (dispatch) => {
    try {
      const res = await FeedResponseService.update(respId, data);
      dispatch({
        type: UPDATE_RESPONSE,
        payload: data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  export const  deleteResponse = (respId) => async (dispatch) => {
    try {
      await FeedResponseService.remove(respId);
      dispatch({
        type: DELETE_RESPONSE,
        payload: { respId },
      });
    } catch (err) {
      console.log(err);
    }
  };