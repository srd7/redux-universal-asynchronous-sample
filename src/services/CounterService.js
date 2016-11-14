// Counter はここに保管しておく。
// 本来なら DB か何かに入れておくべき。
let count = 0;

const CounterService = {
  name: "CounterService",
  read: (_req, _resource, _params, _config, callback) => {
    callback(null, { count });
  },
  update: (_req, _resource, params, _body, _config, callback) => {
    switch(params.type) {
      case "increment": count += 1; break;
      case "decrement": count -= 1; break;
      default         : break;
    }
    callback(null, { count });
  },
};

export default CounterService;
