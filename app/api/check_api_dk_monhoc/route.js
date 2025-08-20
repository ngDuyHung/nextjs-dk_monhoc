export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  const validKey = process.env.VALID_KEY;


  const isValid = key === validKey;

  return new Response(JSON.stringify({ valid: isValid }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
