import update          from "react/lib/update";
import { HomeMessage } from "src/common/messages";

const initialState = {
  token: "",
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case HomeMessage.SET_TOKEN: return update(state, { token: { $set: action.token }});
    default                   : return state;
  }
}
