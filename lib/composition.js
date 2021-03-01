import { ref } from 'vue';
import { add as originalAdd } from './index';

export function useAdd(...initials) {
  const result = ref(originalAdd(...initials));
  function add(...params) {
    result.value = originalAdd(result.value, ...params);
  }

  return {
    result,
    add,
  };
}