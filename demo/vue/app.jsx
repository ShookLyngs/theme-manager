import { defineComponent, ref } from 'vue';
import { useVueThemeManager } from '../../lib';

export default defineComponent(() => {
  const { theme, setTheme } = useVueThemeManager();
  function toggleTheme() {
    setTheme(theme.value.name === 'light' ? 'dark' : 'light');
  }

  return () => (
    <div>
      <div>{theme.value.name}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
});