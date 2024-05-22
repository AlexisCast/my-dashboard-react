import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import user from '@testing-library/user-event';

import Users from '../Users';

expect.extend(toHaveNoViolations);

test('container should have no accessibility violations', async () => {
  const { container } = render(<Users />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

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
