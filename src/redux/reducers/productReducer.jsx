import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrProduct: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      const arrProduct = action.payload;
      state.arrProduct = arrProduct;
    },
  },
});

export const { getProduct } = productReducer.actions;

export default productReducer.reducer;

export const getProductApi = () => {
 return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "get",
      });
      // console.log(result.data.content);
      // setArrProduct(result.data.content);
      const action = getProduct(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
