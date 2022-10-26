import * as types from "./types";
import { listSchema } from "../../../constant";
const INITIAL_STATE = {
  listSchema: listSchema,
  isShowSaveBar: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_LIST_SCHEMA:
      return { ...state, listSchema: action.payload };
    case types.UPDATE_IS_SHOW_SAVE_BAR:
      return {
        ...state,
        isShowSaveBar: action.payload,
      };
   
    default:
      return state;
  }
};

export default reducer;
