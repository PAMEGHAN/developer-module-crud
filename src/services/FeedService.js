import http from "../http-common";

const getAll = () => {
  return http.get("/getAllFeeds");
};

/* const getFeedById = feedId =>{
  return http.get(`/getFeed/${feedId}`)
} */


const create = data => {
  return http.post("/addFeed", data);
};
 
const update = (feedId, data) => {
  return http.put(`/updateFeed/${feedId}`, data);
};

 const remove = feedId => {
  return http.delete(`/admin/deleteFeed/${feedId}`);
};  

const FeedService = {
  getAll,
  create,
  update,
  //getFeedById
 remove,
 
};
export default FeedService;