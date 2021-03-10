import { defineComponent } from 'vue';
import { useThemeManager } from '@lyngs/themer-vue';

export default defineComponent(() => {
  const { theme, setTheme } = useThemeManager();
  function toggleTheme() {
    setTheme(theme.value.name === 'light' ? 'dark' : 'light');
    console.log(theme);
  }

  return () => (
    <div>
      <div>{theme.value.name}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
});