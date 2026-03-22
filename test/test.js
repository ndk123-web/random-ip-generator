const { RandomIPv4, RandomIPv6 } = require('random-ip-gen');

const inst = new RandomIPv4();
const ip = inst.generate();
console.log(ip);
