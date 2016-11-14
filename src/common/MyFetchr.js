import Fetchr from "fetchr";

export default function MyFetchr(getState) {
  return new Fetchr({
    xhrPath: "/api",
    context: {
      _csrf: getState().home.token,
    },
  });
}
