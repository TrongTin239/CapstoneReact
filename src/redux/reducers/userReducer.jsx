import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ACCESS_TOKEN,
  getStore,
  setCookie,
  setStore,
  getStoreJson,
  setStoreJson,
  USER_LOGIN,
} from "../../utils/tools";
import { history } from "../../index";

const initialState = {
  userLogin: getStoreJson(USER_LOGIN),
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
    updateProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { getProfileAction, updateProfileAction } = userReducer.actions;

export default userReducer.reducer;

export const loginApi = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: userLogin,
      });
      console.log(result);
      setCookie(ACCESS_TOKEN, result.data.content.accessToken);
      setStore(ACCESS_TOKEN, result.data.content.accessToken);

      history.push("/profile");
      dispatch(getProfileApi());
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProfileApi = (accessToken = getStore(ACCESS_TOKEN)) => {
  console.log(accessToken);
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/getProfile",
        method: "POST",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      const action = getProfileAction(result.data.content);
      dispatch(action);

      //Save username, password to local storage
      setStoreJson(USER_LOGIN, result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateProfileApi = (accessToken = getStore(ACCESS_TOKEN)) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/updateProfile",
        method: "POST",

        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      console.log(result);
      const action = updateProfileAction(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
