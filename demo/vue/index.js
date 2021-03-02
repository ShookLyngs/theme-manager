import { createApp } from 'vue';

import App from './app.jsx';
const app = createApp(App);

import theme from '../theme';
app.use(theme);

app.mount('#app');