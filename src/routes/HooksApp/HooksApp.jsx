import { CounterApp } from './CounterApp';
import { CounterWithCustomHook } from './CounterWithCustomHook';

const HooksApp = () => {
  return (
    <>
      <div className="p-4">
        <h1>Normal Counter</h1>
        <CounterApp />
        <hr />
      </div>
      <div className="p-4">
        <h1>Counter with Custom Hook</h1>
        <CounterWithCustomHook />
        <hr />
      </div>
    </>
  );
};

export default HooksApp;
