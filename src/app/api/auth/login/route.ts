import axios, { AxiosError } from 'axios';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const res = await axios.post(
      `${process.env.API_URL}/api/v1/auth/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (res.status !== 200) return new Response('Invalid credentials');

    return new Response(JSON.stringify(res.data));
  } catch (error) {
    if (error instanceof AxiosError) {
      return new Response(error.response?.data, {
        status: error.response?.status,
      });
    }
    return new Response('Something went wrong', { status: 500 });
  }
}
