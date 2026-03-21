import { RandomIPv4 } from "../src/ipv4/main";

import { describe, it, expect } from "vitest";

describe("RandomIpv4", () => {
  it("should generate a valid and unique IPV4 address for each object creation", () => {
    const ipv4 = new RandomIPv4();

    /**
     * its a regex to match IPV4 address
     * \d{1,3} matches 1 to 3 digits
     * \. matches the dot
     */
    expect(ipv4.generate()).toMatch(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/);
  });
});
