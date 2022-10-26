import * as types from "./types";

export const updateListSchema = (data) => {
  return {
    type: types.UPDATE_LIST_SCHEMA,
    payload: data,
  };
};
export const updateIsShowSaveBar = (data) => {
  return {
    type: types.UPDATE_IS_SHOW_SAVE_BAR,
    payload: data,
  };
};
