import { defineComponent } from 'vue';
import { createTheme, createThemeManager } from '@lyngs/themer-vue';

export default defineComponent(() => {
  const light = createTheme(() => ({
    name: 'light',
    data: {
      colors: {
        positive: {
          100: '1',
          200: '2',
          300: '3',
        },
        negative: {
          100: '1',
        },
      },
    },
  }));

  const dark = createTheme(() => ({
    name: 'dark',
    data: {
      colors: {
        positive: {
          100: '1',
          200: '2',
          300: '300',
          400: '4',
        },
        negative: {
          100: '1',
          200: '2',
        },
      },
    },
  }));

  const manager = createThemeManager([
    light,
    dark,
  ]);
  
  console.log(manager);

  return () => (
    <div>
      <div>1</div>
    </div>
  );
});