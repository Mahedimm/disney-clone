import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import * as firestoreFunctions from "firebase/firestore"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { db } from "../../../Firebase/firebase.config"


// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),
  ],
  adapter: FirebaseAdapter({
  db,
  ...firestoreFunctions,
  }),
});