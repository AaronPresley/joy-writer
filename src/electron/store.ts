const Store = require("electron-store");

const schema = {
  s3Key: {
    type: "string",
  },
  s3Secret: {
    type: "string",
  },
};

module.exports = { schema, store: new Store({ schema }) };
