import React from 'react';
import { useThemer } from './theme';

export default function() {
  const { theme, setTheme } = useThemer();
  function toggleTheme() {
    setTheme(theme.value.name === 'light' ? 'dark' : 'light')
  }

  const code = "import { createThemer } from '@lyngs/themer-react';\n" +
    "import light from './light';\n" +
    "import dark from './dark';\n" +
    "\n" +
    "export const { origin, useThemer } = createThemer([\n" +
    "  light,\n" +
    "  dark,\n" +
    "]);";

  return (
    <div className="transition bg-positive-100 h-full flex flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="flex flex-col items-end select-none">
          <div className="flex flex-col items-end text-8xl font-bold mb-14">
            <h1 className="transition text-positive-900">
              Themer
            </h1>
            <h2 className="ml-4 transition text-base text-positive-700">
              Modern Theme Variable Manager
            </h2>
          </div>

          <button
            className="px-6 py-3 rounded transition-all text-3xl font-bold bg-theme-default active:bg-theme-400 text-gray-900"
            onClick={toggleTheme}
          >Toggle</button>
        </div>
        <div className="transition ml-14 text-positive-800 text-sm">
          <h2 className="text-2xl mb-3">Installation</h2>
          <pre className="transition bg-positive-200 p-4 mb-6 rounded text-sm select-all">
            npm i -s @lyngs/themer-react
          </pre>
          <h2 className="text-2xl mb-3">Create Themer</h2>
          <pre className="transition bg-positive-200 p-4 mb-6 rounded text-sm">{code}</pre>
        </div>
      </div>
    </div>
  );
}