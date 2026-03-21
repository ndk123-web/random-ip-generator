/**
 * Random IP Generator - Generate unique random IPv4 and IPv6 addresses with validation
 */

import { RandomIPv4 } from "./ipv4/main";
import { RandomIPv6 } from "./ipv6/main";

export { RandomIPv4 } from "./ipv4/main";
export { RandomIPv6 } from "./ipv6/main";

// Default export with both classes
export default {
  RandomIPv4,
  RandomIPv6
};
