# random-ip-gen

Small utility to generate random IPv4 and IPv6 addresses with validation.

## Install

```bash
npm install random-ip-gen
```

## Usage

### JavaScript (CommonJS)

```js
const { RandomIPv4, RandomIPv6 } = require("random-ip-gen");

const ipv4 = new RandomIPv4();
const ipv6 = new RandomIPv6();

console.log(ipv4.generate());
console.log(ipv6.generate());

console.log(RandomIPv4.validate("192.168.0.10"));
console.log(RandomIPv6.validate("2001:0db8:85a3:0000:0000:8a2e:0370:7334"));
```

### TypeScript / ESM

```ts
import { RandomIPv4, RandomIPv6 } from "random-ip-gen";

const ipv4 = new RandomIPv4();
const oneIp: string = ipv4.generate();

const ipv6 = new RandomIPv6();
const manyIpv6: string[] = ipv6.generateMultiple(3);

console.log(oneIp);
console.log(manyIpv6);
```

## API

Both classes have the same instance methods:

- generate(): string
- generateMultiple(count: number): string[]
- getUniqueCount(): number
- clear(): void

Static validation methods:

- RandomIPv4.validate(ip: string): boolean
- RandomIPv6.validate(ip: string): boolean

## Dev

```bash
npm install
npm run build
npm test
```

Build output:

- CommonJS: dist/cjs
- ESM: dist/esm

## License

MIT
