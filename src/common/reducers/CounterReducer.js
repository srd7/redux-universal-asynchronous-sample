import { CounterMessage } from "src/common/messages";

export default (state = 0, action) => {
  switch (action.type) {
    case CounterMessage.SET_COUNTER: return action.count;
    default                        : return state;
  }
};
