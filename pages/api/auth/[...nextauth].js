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
  secret:process.env.JWT_SECRET,
  adapter: FirebaseAdapter({
  db:db,
  ...firestoreFunctions,
  }),
  debug: true,
  theme: 'dark',
});