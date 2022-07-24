import { getToken } from "next-auth/jwt"

export async function middleware(req) {
  const token = await getToken({ req })
  console.log(token)
}

export const config = { matcher: "/" }
