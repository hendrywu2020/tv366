// src/app/api/test/simple/route.ts
export const runtime = 'edge';

export async function GET() {
  return Response.json({ ok: true });
}
