import axios from "axios";
import qs from "qs";

export default {
  //接受数据
  req(...params) {
    if (params.length === 1) {
      return axios.get(params[0]);
    }
    if (params.length === 2) {
      return axios.get(params[0], qs.stringify(params[1]));
    }
  }
};
