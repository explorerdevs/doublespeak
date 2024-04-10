import { cn, type CnOptions } from "tailwind-variants";

export const tw = <T extends CnOptions>(...classes: T) =>
  cn(...classes)({ twMerge: true });

/**
 * Safely parses a value to a number and guards against NaN and negative zero.
 * @param {unknown} value - The value to be parsed.
 * @param {number} [defaultValue=0] - The default value to be returned if parsing fails.
 * @returns {number} The parsed number or the default value.
 */
export const numberGuard = (value: unknown, defaultValue = 0) => {
  const parsed = Number(value);
  return Number.isNaN(parsed) || Object.is(parsed, -0) ? defaultValue : parsed;
};

export const isBrowser = (() =>
  typeof window !== "undefined" &&
  typeof HTMLElement !== "undefined" &&
  !!window.document &&
  String(HTMLElement).includes("[native code]"))();

export const isServer = !isBrowser;
