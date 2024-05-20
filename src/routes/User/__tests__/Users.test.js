import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Users from '../Users';

test('it can receive a new user and show it on a list', async () => {
  render(<Users />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  await user.click(nameInput);
  await user.keyboard('Baz');
  await user.click(emailInput);
  await user.keyboard('Baz@email.com');

  await user.click(button);

  // screen.debug();

  const name = screen.getByRole('cell', { name: 'Baz' });
  const email = screen.getByRole('cell', { name: 'Baz@email.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
