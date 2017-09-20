/**
 * https://webpack.js.org/guides/typescript/#importing-other-assets
 */

/**
 * CSS
 */
declare module "*.css" {
  const content: any;
  export default content;
}

// declare module 'module-name-without-types' {
//   const content: any;
//   export = content;
// }