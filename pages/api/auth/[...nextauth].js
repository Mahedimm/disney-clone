import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import * as firestoreFunctions from "firebase/firestore"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { db } from "../../../Firebase/firebase.config"


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),
  ],
  secret:process.env.NEXT_PUBLIC_SECRET,
  adapter: FirebaseAdapter({
  db:db,
  ...firestoreFunctions,
  }),
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
  },

  theme: {
    colorScheme: "dark",
  },
  debug: true,
});