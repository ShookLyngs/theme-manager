
// Check if target is an Object
export function isObject(target: any): target is Object {
  return Object.prototype.toString.apply(target) === '[object Object]';
}