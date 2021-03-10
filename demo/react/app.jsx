import React, { useState, useEffect } from 'react';
import { useThemeManager } from './theme';

function useStateTest() {
  const [ state, setState ] = useState({ name: 'light' });
  useEffect(() => {
    console.log('StateTest updated: ', state);
  });

  const wrap = { value: { name: 'something' } };
  function setTestState(state) {
    setState(state);
  }

  wrap.value = state;

  return {
    wrap,
    setTestState,
  };
}

export default function() {
  const { theme, setTheme } = useThemeManager();
  function toggleTheme() {
    console.log('setTheme() result: ', setTheme(theme.value.name === 'light' ? 'dark' : 'light'));
  }

  const { wrap, setTestState } = useStateTest();
  function toggleTestState() {
    setTestState(wrap.value.name === 'light' ? { name: 'dark' } : { name: 'light'});
  }

  return (
    <div>
      <div>{theme.value.name}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <div>{wrap.value.name}</div>
      <button onClick={toggleTestState}>Toggle TestState</button>
    </div>
  );
}