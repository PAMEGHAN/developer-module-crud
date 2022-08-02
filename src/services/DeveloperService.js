import http from "../http-common";


const getAll = () => {
  return http.get("/getAllDevelopers");
};

 const getDeveloperById = devId =>{
    return http.get(`/getdeveloper/${devId}`)
}
/*const getBookedVehicles = id => {
  return http.get("/allBookedVehicles");
};
const getAvailableVehicles = id => {
    return http.get("/allAvailableVehicles");
  };
const getNumOfVehiclesRented = id => {
    return http.get("/numOfVehiclesRented");
  }; */
const create = data => {
  return http.post("/developer", data);
};
const update = (devId, data) => {
  return http.put(`/updateDeveloper/${devId}`, data);
};


/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/
const DeveloperService = {
  getAll,
  create,
  update,
  getDeveloperById
  //removeAll,
  //findByTitle
  //you can add more actions here
};
export default DeveloperService;