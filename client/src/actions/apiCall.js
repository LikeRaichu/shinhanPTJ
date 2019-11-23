import axios from "axios";
import {
    GET_TEST,
    REGISTER_FAIL
  } from "./types";
  import { setAlert } from "./alert"

// 테스트용 보험계약 목록조회
export const forTestIns = (cryptes) => {
    const config = {
        headers: {
          "Content-Type": "application/json"
        }
    }
    const call = {
        "dataHeader":{},
        "dataBody": {
           "rdreNo": cryptes
        }
      }
    // console.log(call);

    let itgo = JSON.stringify(call);
    console.log(itgo);

    // const body = JSON.stringify(cryptes);
    // console.log(body, config);
 
    let res = axios.post("http://10.3.17.61:8083/v1/contract/list", itgo);
    console.log(res);
};