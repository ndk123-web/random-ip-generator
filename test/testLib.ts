import { RandomIPv4, RandomIPv6 } from "random-ip-gen";

const ipv4 = new RandomIPv4();
const ipv6 = new RandomIPv6();

console.log(ipv4.generate());
console.log(ipv6.generate());
