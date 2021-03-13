import { createThemer } from '@lyngs/themer-vue';
import light from './light';
import dark from './dark';

const { manager, install } = createThemer([
  light,
  dark,
]);

export default { install };
export {
  manager,
  install,
};