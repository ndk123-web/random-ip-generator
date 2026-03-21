// TypeScript Usage Examples
import { RandomIPv4, RandomIPv6 } from '../src/index';

// IPv4 Examples
console.log('=== IPv4 Examples ===');
const ipv4 = new RandomIPv4();

// Generate single IP
const singleIPv4: string = ipv4.generate();
console.log('Single IPv4:', singleIPv4);

// Generate multiple unique IPs
const multipleIPv4s: string[] = ipv4.generateMultiple(5);
console.log('Multiple IPv4s:', multipleIPv4s);

// Validate IPv4
const isValidIPv4: boolean = RandomIPv4.validate('192.168.1.1');
console.log('Is valid 192.168.1.1:', isValidIPv4);

// Get count of unique IPs generated
const uniqueCount: number = ipv4.getUniqueCount();
console.log('Unique IPs count:', uniqueCount);

// IPv6 Examples
console.log('\n=== IPv6 Examples ===');
const ipv6 = new RandomIPv6();

// Generate single IP
const singleIPv6: string = ipv6.generate();
console.log('Single IPv6:', singleIPv6);

// Generate multiple unique IPs
const multipleIPv6s: string[] = ipv6.generateMultiple(3);
console.log('Multiple IPv6s:', multipleIPv6s);

// Validate IPv6
const isValidIPv6: boolean = RandomIPv6.validate('2001:0db8:85a3:0000:0000:8a2e:0370:7334');
console.log('Is valid 2001:0db8:85a3:0000:0000:8a2e:0370:7334:', isValidIPv6);

// Get count of unique IPs generated
const uniqueIPv6Count: number = ipv6.getUniqueCount();
console.log('Unique IPv6s count:', uniqueIPv6Count);

// Using namespace pattern (if needed)
import IPGenerator from '../src/index';
const namespaceIPv4 = new IPGenerator.RandomIPv4();
console.log('\nNamespace IPv4:', namespaceIPv4.generate());
