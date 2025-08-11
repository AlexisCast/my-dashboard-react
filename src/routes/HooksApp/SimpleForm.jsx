import React, { useState, useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: 'baz',
    email: 'baz@google.com'
  });

  const { userName, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

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
      <h1>Simple Form</h1>

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

      <p>Type in `baz2` and will show Message and execute a addEventListener(onMouseMove)</p>

      {userName === 'baz2' && <Message />}
    </>
  );
};
