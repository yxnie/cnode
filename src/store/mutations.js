import { NUM_add } from "./mutation-types";

export default {
  [NUM_add](state, data) {
    state.num = data;
  }
};
