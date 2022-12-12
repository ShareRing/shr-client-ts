const Chai = require("chai");
const ChaiAsPromised = require("chai-as-promised");
const ChaiBytes = require("chai-bytes");


Chai.should();
Chai.use(ChaiAsPromised);
Chai.use(ChaiBytes);

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
  // application specific logging, throwing an error, or other logic here
});

module.exports = Chai;
