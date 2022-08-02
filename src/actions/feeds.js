import {
    ADD_FEED,
  RETRIEVE_FEEDS,
  //RETRIEVE_FEED_BY_ID,
  UPDATE_FEED,
  DELETE_FEED,
  
} from "./types";
import  FeedService from "../services/FeedService";


export const addFeed = ({feedDateTime,query,relevance,topic,totalComments}) => async (dispatch) => {
  try {
    //first the call to back end server is happening
    //data of product type and we receive server response

    const res = await FeedService.create({ feedDateTime,query,relevance,topic,totalComments });
   
    dispatch({
      type: ADD_FEED,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveFeeds = () => async (dispatch) => {
  try {
    const res = await FeedService.getAll();
    //console.log(JSON.stringify(res)+'$$$$')
    dispatch({
      type: RETRIEVE_FEEDS,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};


/* export const retrieveFeedById = () => async (dispatch) => {
  try {
    const res = await FeedService.getFeedById();
    dispatch({
      type: RETRIEVE_FEED_BY_ID,
      payload:res.data,
    });
   
  
  }
  catch(err){return Promise.reject(err);}};
 */

export const updateFeed = (feedId, data) => async (dispatch) => {
  try {
    const res = await FeedService.update(feedId, data);
    dispatch({
      type: UPDATE_FEED,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const  deleteFeed = (feedId) => async (dispatch) => {
  try {
    await FeedService.remove(feedId);
    dispatch({
      type: DELETE_FEED,
      payload: {feedId },
    });
  } catch (err) {
    console.log(err);
  }
};