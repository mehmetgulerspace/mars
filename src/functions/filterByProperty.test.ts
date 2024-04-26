import { filterByProperty } from './filterByProperty';

interface User {
  id: number;
  name: string;
  city: string;
}

const users: User[] = [
  { id: 1, name: 'John Doe', city: 'New York' },
  { id: 2, name: 'Jane Doe', city: 'San Francisco' },
  { id: 3, name: 'Alice', city: 'New York' }
];

describe('filterByProperty', () => {
  test('should filter users by city "New York" and return matching users.', () => {
    const result = filterByProperty(users, 'city', 'New York');
    expect(result).toEqual([
      { id: 1, name: 'John Doe', city: 'New York' },
      { id: 3, name: 'Alice', city: 'New York' }
    ]);
  });

  test('should return an empty array if no users match the filter', () => {
    const result = filterByProperty(users, 'city', 'Los Angeles');
    expect(result).toEqual([]);
  });

  test('should filter users by name "Jane Doe" and return the matching user.', () => {
    const result = filterByProperty(users, 'name', 'Jane Doe');
    expect(result).toEqual([{ id: 2, name: 'Jane Doe', city: 'San Francisco' }]);
  });
});
