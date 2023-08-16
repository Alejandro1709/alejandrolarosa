import axios from 'axios';

export async function GET() {
  try {
    // fetch current user
    const response = await axios.get(`${process.env.API_URL}/api/v1/auth`);

    if (response.status !== 200) {
      return new Response(response.data.message);
    }

    return new Response('Current Authed User');
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
    console.log(err);
  }

  return new Response('Current Authed User');
}
