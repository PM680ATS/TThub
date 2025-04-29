export const mockUsers = [
  {
    id: 1,
    username: "tenant1",
    password: "password123",
    name: "John Doe",
  },
];

export function authenticate(username: string, password: string) {
  return mockUsers.find(
    (user) => user.username === username && user.password === password
  );
}
