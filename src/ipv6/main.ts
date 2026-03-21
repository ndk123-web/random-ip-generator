export class RandomIPv6 {
  private static readonly MAX = 65535;
  private static readonly MIN = 0;
  private static readonly LENGTH = 8;

  private readonly uniqueIPv6: Set<string>;

  constructor() {
    this.uniqueIPv6 = new Set();
  }

  /**
   * Generate a random IPv6 address
   * @returns A random unique IPv6 address per instance
   * @example
   * ```ts
   * const ipv6 = new RandomIPv6();
   * console.log(ipv6.generate()); // 2001:0db8:85a3:0000:0000:8a2e:0370:7334
   * ```
   */
  generate(): string {
    let ip: string;

    do {
      ip = this.generateRandomIP();
    } while (this.uniqueIPv6.has(ip));

    this.uniqueIPv6.add(ip);
    return ip;
  }

  /**
   * Generate multiple unique random IPv6 addresses
   * @param count Number of IPs to generate
   * @returns Array of unique IPv6 addresses
   */
  generateMultiple(count: number): string[] {
    const ips: string[] = [];
    for (let i = 0; i < count; i++) {
      ips.push(this.generate());
    }
    return ips;
  }

  /**
   * Validate IPv6 address format
   * @param ip IP address to validate
   * @returns true if valid IPv6, false otherwise
   */
  static validate(ip: string): boolean {
    const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    const ipv6CompressedRegex = /^(?:[0-9a-fA-F]{1,4}:)*::(?:[0-9a-fA-F]{1,4}:)*[0-9a-fA-F]{1,4}$/;
    return ipv6Regex.test(ip) || ipv6CompressedRegex.test(ip);
  }

  /**
   * Get count of unique IPs generated
   * @returns Number of unique IPs generated
   */
  getUniqueCount(): number {
    return this.uniqueIPv6.size;
  }

  /**
   * Clear all generated IPs from memory
   */
  clear(): void {
    this.uniqueIPv6.clear();
  }

  private generateRandomIP(): string {
    const parts: string[] = [];
    for (let i = 0; i < RandomIPv6.LENGTH; i++) {
      const part = Math.floor(Math.random() * (RandomIPv6.MAX - RandomIPv6.MIN + 1)) + RandomIPv6.MIN;
      parts.push(part.toString(16).padStart(4, '0'));
    }
    return parts.join(':');
  }
}
