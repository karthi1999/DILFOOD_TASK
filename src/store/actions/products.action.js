import { getProductList, getProductLoading } from "../slices";
import axios from "axios";

export const getProductListAPI = () => {
  return async (dispatch) => {
    dispatch(getProductLoading(true));
    try {
      const url = '/api/products';
      let response = await axios.post(url);
      const { data, status: { code } } = response.data.result;
      if (code === "200") {
        dispatch(getProductList(data));
      } else {
        dispatch(getProductList([]));
      }

      dispatch(getProductLoading(false));
    } catch (error) {
      console.error('Error:', error);

      dispatch(getProductList([]));
      dispatch(getProductLoading(false));
    }

  };
};
