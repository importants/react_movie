if (process.env.NODE_ENV === `production`) {
  // 배포 후(Deploy)
  module.exports = require(`./prod`);
} else {
  // development => local 환경에서
  module.exports = require(`./dev`);
}
