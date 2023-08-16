export const handleLogin = async (credentials: {
  email: string;
  password: string;
}) => {
  console.log(credentials);
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  return data;
};
