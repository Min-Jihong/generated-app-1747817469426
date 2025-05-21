import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      authorize: async (credentials) => {
        const user = { id: 1, name: 'User', email: 'user@example.com' }
        if (credentials.username === 'user' && credentials.password === 'password') {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token.id = user.id;
      return token;
    },
    session: async ({ session, token }) => {
      session.user.id = token.id;
      return session;
    },
  }
})