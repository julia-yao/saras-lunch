import {
  UPDATE_IS_LOADING_STATUS,
  UPDATE_HEADER_DATA,
  UPDATE_FOOTER_DATA,
} from '../constant/reducer/common';

// first state
const initState = {
  isLoading: true,
  header: {},
  footer: {}
};

// reducer
const common = (state = initState, action) => {
  switch (action.type){
    case UPDATE_IS_LOADING_STATUS:
      return {
          ...state,
          isLoading: action.payload,
      }
    
    case UPDATE_HEADER_DATA:
      return {
        ...state,
        header: action.payload
      }
    
    case UPDATE_FOOTER_DATA:
      return {
        ...state,
        footer: action.payload
      }

    default:
      return state;
    }
}

export default common;