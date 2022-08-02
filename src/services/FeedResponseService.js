import http from "../http-common";

const getAll = () => {
  return http.get("/getAllResponse");
};

/* const getResponseById = responsId =>{
  return http.get(`/getresponse/${responseId}`)
} */

const create =  data => {
  return http.put("/addResponse",data );
};

const update = (respId, data) => {
  return http.put(`/updateResponse/${respId}`, data);
};

const remove = respId => {
  return http.delete(`/admin/deleteResponse/${respId}`);
};

const FeedResponseService = {
  getAll,
  create,
  remove,
  update
  //getResponseById

  //you can add more actions here
};
export default FeedResponseService;
