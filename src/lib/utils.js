/* ===================================================================
   XIBOTIX — Utility Helpers
   Small pure functions used across the application.
   =================================================================== */

/**
 * Merges class names, filtering out falsy values.
 * A lightweight alternative to clsx / classnames.
 *
 * @param  {...string} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a phone number string for display.
 * @param {string} phone
 * @returns {string}
 */
export function formatPhone(phone) {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}
