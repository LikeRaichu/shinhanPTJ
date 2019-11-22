import axios from "axios";
import {
    GET_TEST,
    REGISTER_FAIL
  } from "./types";
  import { setAlert } from "./alert"

// 테스트용 보험계약 목록조회
export const forTestIns = ({ cryptes }) => async dispatch => {
    
    const config = {
        headers: {
          "Content-Type": "application/json"
        }
    }
    const body = JSON.stringify({ cryptes });
    console.log(body);
  try {
    const res = await axios.post("http://10.3.17.61:8083/v1/contract/list", body, config);
    
    dispatch({
        type: GET_TEST,
        payload: res.data
      });
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "negative")));
        }                                                                                                                                                                                                                  
    }
   
    dispatch({
        type: REGISTER_FAIL
    });
};