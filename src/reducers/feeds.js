import {
    ADD_FEED,
  RETRIEVE_FEEDS,
  UPDATE_FEED,
 // RETRIEVE_FEED_BY_ID
  DELETE_FEED,
  } from "../actions/types";

  const initialState = [];
  function feedReducer(feeds = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_FEED:
        return [...feeds, payload];

      /* case RETRIEVE_FEED_BY_ID:
        return payload; */

      case RETRIEVE_FEEDS:
        return payload;
        
        
      case UPDATE_FEED:
        return feeds.map((feed) => {
          if (feed.feedId === payload.feedId) {
            return {
              ...feed,
              ...payload,
            };
          } else {
            return feed;
          }
        });

       case DELETE_FEED:
        return feeds.filter(({ feedId }) => feedId !== payload.feedId);
       
      
      default:
        return feeds;
    }
  };
  export default feedReducer;