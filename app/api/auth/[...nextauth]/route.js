import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      // profile: true,
    }),
  ],
});

<<<<<<< HEAD
export { handler as GET, handler as POST };
=======
export { handler as GET, handler as POST };
>>>>>>> d92f634af31e83bfcefe10bf8da239c9fff48772
