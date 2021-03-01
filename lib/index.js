export { useAdd } from './composition';

export function add(...params) {
  return params.reduce((collection, current) => collection + current, 0);
}
