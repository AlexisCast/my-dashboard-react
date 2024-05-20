import { render, screen, act } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  // Try to render my component
  render(<UserForm />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // Assertion - make sure the component is doing
  // what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

// issue of this approach is that whan changing order of inputs, it breaks
test.skip('it call onUserAdd when the form is submitted', async () => {
  const mock = jest.fn();

  // Render my component
  render(<UserForm onUserAdd={mock} />);

  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  // Simulate typing in a name
  await user.click(nameInput);
  await user.keyboard('Baz');

  // Simulate typing in an email
  await user.click(emailInput);
  await user.keyboard('baz@email.com');

  // Find the button
  const button = screen.getByRole('button');

  // Simulate clicking the button
  await user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'Baz', email: 'baz@email.com' });
});

// this approach doesnt matter the order of inputs
test('it call onUserAdd when the form is submitted with different better approach htmlFor/id', async () => {
  const mock = jest.fn();

  // Render my component
  render(<UserForm onUserAdd={mock} />);

  // Find the two inputs
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  // Simulate typing in a name
  await user.click(nameInput);
  await user.keyboard('Baz');

  // Simulate typing in an email
  await user.click(emailInput);
  await user.keyboard('baz@email.com');

  // Find the button
  const button = screen.getByRole('button');

  // Simulate clicking the button
  await user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'Baz', email: 'baz@email.com' });
});

test('it empties the two inputs when form is submitted', async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  await user.click(nameInput);
  await user.keyboard('Baz');
  await user.click(emailInput);
  await user.keyboard('Baz@email.com');

  await user.click(button);

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
