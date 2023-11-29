import {
  UPDATE_INDEX_DATA,
  UPDATE_LUNCHAREA_DATA
} from '../constant/reducer/index';

// first state
const initState = {
  main_area: {},
  lunch_area: {}
};

// reducer
const index = (state = initState, action) => {
  switch (action.type){
    case UPDATE_INDEX_DATA:
      return {
        ...state,
        main_area: action.payload
      }
    case UPDATE_LUNCHAREA_DATA:
      return {
        ...state,
        lunch_area: action.payload
      }

    default:
      return state;
    }
}

export default index;