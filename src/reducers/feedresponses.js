import {
    ADD_RESPONSE,
  RETRIEVE_RESPONSES,
  UPDATE_RESPONSE,
  DELETE_RESPONSE,
   // RETRIEVE_RESPONSE_BY_ID

  } from "../actions/types";
  const initialState = [];
  function feedresponseReducer(feedresponses= initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_RESPONSE:
        return [...feedresponses, payload];

        /* case RETRIEVE_RESPONSE_BY_ID:
        return payload; */

      case RETRIEVE_RESPONSES:
        return payload;

      case UPDATE_RESPONSE:
        return feedresponses.map((feedresponse) => {
          if (feedresponse.respId === payload.respId) {
            return {
              ...feedresponse,
              ...payload,
            };
          } else {
            return feedresponse;
          }
        });
     case DELETE_RESPONSE:
        return feedresponses.filter(({ respId }) => respId !== payload.respId);
      
      default:
        return feedresponses;
    }
  };
  export default feedresponseReducer;
