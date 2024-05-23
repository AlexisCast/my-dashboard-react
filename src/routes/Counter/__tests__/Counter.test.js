import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';

import Counter from '../Counter';

expect.extend(toHaveNoViolations);

test('UserForm should have no accessibility violations', async () => {
  const { container } = render(<Counter />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('it shows numer 1 in counter when clicked on +1', async () => {
  render(<Counter />);

  const addButton = screen.getByRole('button', { name: /\+1/i });

  await user.click(addButton);

  expect(screen.getByText('1')).toBeInTheDocument();
});

test('it shows number -2 in counter when clicked on -1 two times', async () => {
  render(<Counter />);

  const minusButton = screen.getByRole('button', { name: /-1/i });

  await user.click(minusButton);
  await user.click(minusButton);

  expect(screen.getByText('-2')).toBeInTheDocument();
});
