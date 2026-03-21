// JavaScript Usage Examples
const { RandomIPv4, RandomIPv6 } = require('../dist/src/index.js');

// IPv4 Examples
console.log('=== IPv4 Examples ===');
const ipv4 = new RandomIPv4();

// Generate single IP
console.log('Single IPv4:', ipv4.generate());

// Generate multiple unique IPs
console.log('Multiple IPv4s:', ipv4.generateMultiple(5));

// Validate IPv4
console.log('Is valid 192.168.1.1:', RandomIPv4.validate('192.168.1.1'));
console.log('Is valid invalid.ip:', RandomIPv4.validate('invalid.ip'));

// Get count of unique IPs generated
console.log('Unique IPs count:', ipv4.getUniqueCount());

// IPv6 Examples
console.log('\n=== IPv6 Examples ===');
const ipv6 = new RandomIPv6();

// Generate single IP
console.log('Single IPv6:', ipv6.generate());

// Generate multiple unique IPs
console.log('Multiple IPv6s:', ipv6.generateMultiple(3));

// Validate IPv6
console.log('Is valid 2001:0db8:85a3:0000:0000:8a2e:0370:7334:', RandomIPv6.validate('2001:0db8:85a3:0000:0000:8a2e:0370:7334'));
console.log('Is valid invalid.ipv6:', RandomIPv6.validate('invalid.ipv6'));

// Get count of unique IPs generated
console.log('Unique IPv6s count:', ipv6.getUniqueCount());
