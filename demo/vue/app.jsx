import { defineComponent, ref } from 'vue';
import { useAdd } from '../../lib';

export default defineComponent(() => {
  const {
    result: count,
    add: increase,
  } = useAdd(0);

  return () => (
    <div>
      <div>{count.value}</div>
      <button onClick={() => increase(1)}>Increase</button>
    </div>
  );
});