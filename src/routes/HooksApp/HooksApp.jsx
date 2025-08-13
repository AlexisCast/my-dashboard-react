import { CounterApp } from './CounterApp';
import { CounterWithCustomHook } from './CounterWithCustomHook';
import { SimpleForm } from './SimpleForm';
import { FormWithCustomHook } from './FormWithCustomHook';
import { MultipleCustomHooks } from './MultipleCustomHooks';

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
      <div className="p-4">
        <SimpleForm />
        <hr />
      </div>
      <div className="p-4">
        <FormWithCustomHook />
        <hr />
      </div>
      <div className="p-4">
        <MultipleCustomHooks />
        <hr />
      </div>
    </>
  );
};

export default HooksApp;
