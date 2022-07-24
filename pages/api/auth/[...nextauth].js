import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
export default NextAuth({
  providers: [
    Credentials({
      credentials: { pw: { type: "password", label: "Password" } },
      authorize(credentials) {
        return credentials.pw === "pw" ? { name: "John" } : null
      },
    }),
  ],
})
