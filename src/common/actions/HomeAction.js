import { HomeMessage } from "src/common/messages";

export function setToken(token) {
  return {
    type: HomeMessage.SET_TOKEN,
    token,
  };
}
