export const mockUser = {
  email: "tenant@example.com",
  password: "password123",
};

export function authenticate(email: string, password: string): boolean {
  return email === mockUser.email && password === mockUser.password;
}