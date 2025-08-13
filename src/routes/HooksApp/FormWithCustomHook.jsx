import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, userName, email, password } = useForm({
    userName: '',
    email: '',
    password: ''
  });

  // const { userName, email, password } = formState;

  useEffect(() => {
    console.log('useEffect called!');
  }, []);

  useEffect(() => {
    console.log('formState changed!');
  }, [formState]);

  useEffect(() => {
    console.log('email changed!');
  }, [email]);

  return (
    <>
      <h1>Simple Form with custom Hook</h1>

      <input
        type="text"
        className="form-control m-2"
        placeholder="UserName"
        name="userName"
        value={userName}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control m-2"
        placeholder="foo@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control m-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm}>Reset</button>
    </>
  );
};
