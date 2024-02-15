export async function GET() {
  const res = await fetch(
    `https://api.raindrop.io/rest/v1/raindrops/${process.env.RAINDROP_COLLECTION_PROJECTS}`,
    {
      cache: 'no-cache',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return Response.json({ data })
}
