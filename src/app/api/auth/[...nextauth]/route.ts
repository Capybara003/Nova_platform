import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import DiscordProvider from 'next-auth/providers/discord'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || '',
    }),
    DiscordProvider({
      clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET || '',
      // authorization: {params: {scope: scopes}},
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || '',
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
