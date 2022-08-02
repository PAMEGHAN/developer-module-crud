import {
  ADD_DEVELOPER,
RETRIEVE_DEVELOPERS,
UPDATE_DEVELOPER,
RETRIEVE_DEVELOPER_BY_ID
} from "../actions/types";

const initialState = [];
function developerReducer(developers = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_DEVELOPER:
      return [...developers, payload];
    case RETRIEVE_DEVELOPER_BY_ID:
      return payload;
    case RETRIEVE_DEVELOPERS:
      return payload;
    case UPDATE_DEVELOPER:
      return developers.map((developer) => {
        if (developer.devId === payload.id) {
          return {
            ...developer,
            ...payload,
          };
        } else {
          return developer;
        }
      });
    
    default:
      return developers;
  }
};
export default developerReducer;