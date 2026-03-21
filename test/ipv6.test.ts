import { RandomIPv6 } from "../src";
import { describe, it, expect } from "vitest";

describe("RandomIPv6", () => {
  it("should generate a random and unique IPv6 address", () => {
    const ipv6 = new RandomIPv6();
    const ip = ipv6.generate();
    expect(ip).toBeDefined();
    expect(ip).toMatch(/^[0-9a-f]{4}(:[0-9a-f]{4}){7}$/i);
  });
});

// const ipv6 = new RandomIPv6();
// console.log(ipv6.generate());