import MyFetchr           from "src/common/MyFetchr";
import { CounterMessage } from "src/common/messages";

export function initialize(params) {
  return (dispatch, getState) => {
    return MyFetchr(getState).read("CounterService")
      .params(params)
      .end()
      .then(({ data }) => dispatch({
        type : CounterMessage.SET_COUNTER,
        count: data.count,
      }))
      .catch(err => {
        console.error("error", err);
      });

  };
}

export function increment() {
  return (dispatch, getState) => {
    return MyFetchr(getState).update("CounterService")
      .params({ type: "increment" })
      .end()
      .then(({ data }) => dispatch({
        type : CounterMessage.SET_COUNTER,
        count: data.count,
      }))
      .catch(err => {
        console.error(err);
      });
  };
}

export function decrement() {
  return (dispatch, getState) => {
    return MyFetchr(getState).update("CounterService")
      .params({ type: "decrement" })
      .end()
      .then(({ data }) => dispatch({
        type : CounterMessage.SET_COUNTER,
        count: data.count,
      }))
      .catch(err => {
        console.error(err);
      });
  };
}
