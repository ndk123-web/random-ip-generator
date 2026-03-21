export class RandomIPv4 {
  private static readonly MAX = 255;
  private static readonly MIN = 0;
  private static readonly LENGTH = 4;

  private readonly uniqueIPv4: Set<string>;

  constructor() {
    this.uniqueIPv4 = new Set();
  }

  /**
   * Generate a random IPv4 address
   * @returns A random unique IPv4 address per instance
   * @example
   * ```ts
   * const ipv4 = new RandomIPv4();
   * console.log(ipv4.generate()); // 192.168.1.1
   * ```
   */
  generate(): string {
    let ip: string;

    do {
      ip = this.generateRandomIP();
    } while (this.uniqueIPv4.has(ip));

    this.uniqueIPv4.add(ip);
    return ip;
  }

  /**
   * Generate multiple unique random IPv4 addresses
   * @param count Number of IPs to generate
   * @returns Array of unique IPv4 addresses
   */
  generateMultiple(count: number): string[] {
    const ips: string[] = [];
    for (let i = 0; i < count; i++) {
      ips.push(this.generate());
    }
    return ips;
  }

  /**
   * Validate IPv4 address format
   * @param ip IP address to validate
   * @returns true if valid IPv4, false otherwise
   */
  static validate(ip: string): boolean {
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipv4Regex.test(ip);
  }

  /**
   * Get count of unique IPs generated
   * @returns Number of unique IPs generated
   */
  getUniqueCount(): number {
    return this.uniqueIPv4.size;
  }

  /**
   * Clear all generated IPs from memory
   */
  clear(): void {
    this.uniqueIPv4.clear();
  }

  private generateRandomIP(): string {
    const part = () => Math.floor(Math.random() * 256);
    return `${part()}.${part()}.${part()}.${part()}`;
  }
}
