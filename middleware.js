import { getToken } from "next-auth/jwt"

export async function middleware(req) {
  const token = await getToken({ req })
  console.log(
    new TextDecoder().decode(
      new Uint8Array([
        123, 34, 110, 97, 109, 101, 34, 58, 34, 74, 111, 104, 110, 34, 44, 34,
        105, 97, 116, 34, 58, 49, 54, 53, 56, 55, 52, 49, 54, 51, 57, 44, 34,
        101, 120, 112, 34, 58, 49, 54, 54, 49, 51, 51, 51, 54, 51, 57, 44, 34,
        106, 116, 105, 34, 58, 34, 99, 99, 53, 98, 48, 99, 55, 100, 45, 99, 49,
        48, 99, 45, 52, 57, 51, 98, 45, 57, 98, 54, 102, 45, 102, 52, 99, 51,
        101, 50, 101, 97, 97, 52, 50, 98, 34, 125,
      ])
    )
  )
}

export const config = { matcher: "/" }
