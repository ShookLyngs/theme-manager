import { createVueThemeManager } from '../../lib';
import light from './light';
import dark from './dark';

const { manager, install } = createVueThemeManager([
  light,
  dark,
]);

export default { install };
export {
  manager,
  install,
};