import { createThemeManager } from '@lyngs/themer-vue';
import light from './light';
import dark from './dark';

const { manager, install } = createThemeManager([
  light,
  dark,
]);

export default { install };
export {
  manager,
  install,
};