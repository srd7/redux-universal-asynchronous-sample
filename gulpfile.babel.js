import gulp         from "gulp";
import nodemon      from "gulp-nodemon";
import childProcess from "child_process";

const env = {
  NODE_ENV : "development",
  NODE_PATH: ".",
};

gulp.task("dev", () => {
  // childProcess.fork("./src/entry/server", { env });
  nodemon({
    script: "./src/entry/server",
    ext: "js jsx",
    env,
  });
});
