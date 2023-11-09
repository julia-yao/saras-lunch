import {
  UPDATE_INDEX_DATA
} from '../constant/reducer/index';

// first state
const initState = {
  content:{}
};

// reducer
const index = (state = initState, action) => {
  switch (action.type){
    case UPDATE_INDEX_DATA:
      return {
        ...state,
        content: action.payload
      }

    default:
      return state;
    }
}

export default index;