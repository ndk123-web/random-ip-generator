# Random IP Generator

Generate unique random IPv4 and IPv6 addresses with validation support.

## Features

- 🎲 Generate unique random IPv4 addresses
- 🌐 Generate unique random IPv6 addresses  
- ✅ Built-in IP address validation
- 🔒 Per-instance uniqueness tracking
- 📦 TypeScript and JavaScript support
- 🚀 Lightweight and fast

## Installation

```bash
npm install random-ip-gen
```

## Usage

### JavaScript

```javascript
const { RandomIPv4, RandomIPv6 } = require('random-ip-gen');

// IPv4
const ipv4 = new RandomIPv4();
console.log(ipv4.generate()); // 192.168.1.1
console.log(RandomIPv4.validate('192.168.1.1')); // true

// IPv6
const ipv6 = new RandomIPv6();
console.log(ipv6.generate()); // 2001:0db8:85a3:0000:0000:8a2e:0370:7334
console.log(RandomIPv6.validate('2001:0db8:85a3:0000:0000:8a2e:0370:7334')); // true
```

### TypeScript

```typescript
import { RandomIPv4, RandomIPv6 } from 'random-ip-gen';

// IPv4
const ipv4 = new RandomIPv4();
const ip: string = ipv4.generate();
const isValid: boolean = RandomIPv4.validate(ip);

// IPv6
const ipv6 = new RandomIPv6();
const ipv6Ip: string = ipv6.generate();
const isValid6: boolean = RandomIPv6.validate(ipv6Ip);
```

## API Reference

### RandomIPv4

#### Constructor
```typescript
new RandomIPv4()
```

#### Methods

- `generate(): string` - Generate a unique random IPv4 address
- `generateMultiple(count: number): string[]` - Generate multiple unique IPv4 addresses
- `getUniqueCount(): number` - Get count of unique IPs generated
- `clear(): void` - Clear all generated IPs from memory

#### Static Methods

- `validate(ip: string): boolean` - Validate IPv4 address format

### RandomIPv6

#### Constructor
```typescript
new RandomIPv6()
```

#### Methods

- `generate(): string` - Generate a unique random IPv6 address
- `generateMultiple(count: number): string[]` - Generate multiple unique IPv6 addresses
- `getUniqueCount(): number` - Get count of unique IPs generated
- `clear(): void` - Clear all generated IPs from memory

#### Static Methods

- `validate(ip: string): boolean` - Validate IPv6 address format

## Examples

```typescript
// Generate 10 unique IPv4 addresses
const ipv4 = new RandomIPv4();
const ips = ipv4.generateMultiple(10);
console.log(ips); // ['192.168.1.1', '10.0.0.1', ...]

// Validate IP addresses
console.log(RandomIPv4.validate('192.168.1.1')); // true
console.log(RandomIPv4.validate('invalid.ip')); // false

// Per-instance uniqueness
const ipv4a = new RandomIPv4();
const ipv4b = new RandomIPv4();

console.log(ipv4a.generate()); // 192.168.1.1
console.log(ipv4b.generate()); // 192.168.1.1 (different instance, can be same)
console.log(ipv4a.generate()); // 10.0.0.1 (different from previous in same instance)
```

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Test
npm test

# Development
npm run dev
```

## License

MIT

## Contributing

Pull requests are welcome! For major changes, please open an issue first.