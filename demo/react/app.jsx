import React from 'react';
      import { useThemeManager } from './theme';

      export default function() {
      const { theme, setTheme } = useThemeManager();
      function toggleTheme() {
      setTheme(theme.value.name === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="transition bg-positive-100 h-full flex flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="flex flex-col items-end select-none">
          <div className="flex flex-col items-end text-8xl font-bold mb-14">
            <h1 className="transition text-positive-900">
              Themer
            </h1>
            <h2 className="ml-4 mt-2 px-3 py-0.5 rounded transition text-sm bg-positive-200 text-positive-500">
              Modern Web Theme Manager in JavaScript.
            </h2>
          </div>

          <button
            className="px-6 py-3 rounded transition-all text-3xl font-bold bg-theme-default active:bg-theme-400 text-gray-900"
            onClick={toggleTheme}
          >Toggle</button>
        </div>
        <div className="ml-14 text-positive-800">
          <h2 className="text-2xl mb-3">Installation</h2>
          <code className="bg-positive-200 p-3">
            const name = 1;
            call();
          </code>
        </div>
      </div>
    </div>
  );
}