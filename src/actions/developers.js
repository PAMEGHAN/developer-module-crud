import {
  ADD_DEVELOPER,
RETRIEVE_DEVELOPERS,
RETRIEVE_DEVELOPER_BY_ID,
UPDATE_DEVELOPER,
//DELETE_VEHICLE,

} from "./types";
import  DeveloperService from "../services/DeveloperService";

//we are creating action objects so that they can be dispatched to the store
//addProduct --dispatch object from where -
// when we  bindActionCreators -- destructured object of diff vars and functions and to that we are tying the dispatch
//useDispatch hook , which will give us the constant of dispatch

export const addDeveloper = ({developerName, email, skillLevel, memberSince, totalFeeds, reputation, isVerified, isBlocked}) => async (dispatch) => {
try {
  //first the call to back end server is happening
  //data of product type and we receive server response

  const res = await DeveloperService.create({developerName, email, skillLevel, memberSince, totalFeeds, reputation, isVerified, isBlocked});

  dispatch({
    type: ADD_DEVELOPER,
    payload: res.data,
  });
  return Promise.resolve(res.data);
} catch (err) {
  return Promise.reject(err);
}
};
export const retrieveDevelopers = () => async (dispatch) => {
try {
  const res = await DeveloperService.getAll();
  dispatch({
    type: RETRIEVE_DEVELOPERS,
    payload:res.data,
  });
 

}
catch(err){return Promise.reject(err);}};

 export const retrieveDeveloperById = () => async (dispatch) => {
try {
  const res = await DeveloperService.getDeveloperById();
  dispatch({
    type: RETRIEVE_DEVELOPER_BY_ID,
    payload:res.data,
  });
 

}
catch(err){return Promise.reject(err);}};

/*
export const retrieveBookedVehicles = () => async (dispatch) => {
  try {
    const res = await VehicleService.getBookedVehicles();
    dispatch({
      type: RETRIEVE_BOOKED_VEHICLES,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};
export const retrieveAvaialableVehicles = () => async (dispatch) => {
  try {
    const res = await VehicleService.getAvailableVehicles();
    dispatch({
      type: RETRIEVE_AVAILABLE_VEHICLES,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};

export const getNumberOfVehiclesRented = () => async (dispatch) => {
  try {
    const res = await VehicleService.getNumOfVehiclesRented();
    dispatch({
      type: GET_NUMBER_OF_VEHICLES_RENTED,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}}; */

export const updateDeveloper = (devId, data) => async (dispatch) => {
try {
  const res = await DeveloperService.update(devId, data);
  dispatch({
    type: UPDATE_DEVELOPER,
    payload: data,
  });
  return Promise.resolve(res.data);
} catch (err) {
  return Promise.reject(err);
}
};
/* export const  deleteVehicle = (id) => async (dispatch) => {
try {
  await VehicleService.remove(id);
  dispatch({
    type: DELETE_VEHICLE,
    payload: { id },
  });
} catch (err) {
  console.log(err);
}
}; */