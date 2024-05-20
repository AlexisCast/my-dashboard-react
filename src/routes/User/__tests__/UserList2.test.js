import { render, screen, within } from '@testing-library/react';
import UserList from '../UserList';

function renderComponent() {
  const users = [
    { name: 'Baz', email: 'Baz@email.com' },
    { name: 'Buz', email: 'Buz@email.com' }
  ];

  render(<UserList users={users} />);

  return {
    users
  };
}
// Issues because there are more rows than expected(header and from body)
test.skip('it renders one row per user', () => {
  // Render the component
  renderComponent();

  // Find all the rows in the table
  // screen.logTestingPlaygroundURL();
  const rows = screen.getAllByRole('row');

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

// using data-testid, NOT recommended, try getByRole first
test('it renders one row per user', () => {
  /*
  ...
    <tbody data-testid="users">{renderedUsers}</tbody>
  ....
  */
  // Render the component
  renderComponent();

  // Find all the rows in the table
  // screen.logTestingPlaygroundURL();
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

// Using querySelector
test.skip('it renders one row per user', () => {
  // Render the component
  const users = [
    { name: 'Baz', email: 'Baz@email.com' },
    { name: 'Buz', email: 'Buz@email.com' }
  ];

  const { container } = render(<UserList users={users} />);

  // Find all the rows in the table
  // screen.logTestingPlaygroundURL();
  const table = container.querySelector('table');
  console.log(table);
  const rows = container.querySelectorAll('tbody tr');

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

//
test('it renders the email and name of each user', () => {
  // Render the component
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
