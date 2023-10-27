import { UPDATE_IS_LOADING_STATUS } from '../constant/reducer/common';

const initState = {
  isLoading: true
};

const common = (state = initState, action) => {
  switch (action.type){
    case UPDATE_IS_LOADING_STATUS:
      return {
          ...state,
          isLoading: action.payload,
      }

      default:
        return state;
    }
}

export default common;