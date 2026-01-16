import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const mockUser = {
          id: "1",
          name: "MR USER",
          email: "mruser@freshup.com",
          password: "1234Nn",
          image: "https://i.pravatar.cc/150?u=nirob",
        };

        if (
          credentials.email === mockUser.email &&
          credentials.password === mockUser.password
        ) {
          return mockUser;
        }

        return null; // Login fail hole null pathabe
      },
    }),
  ],
  pages: {
    signIn: "/login", // Custom login page path
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };