import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDb } from "@/utils/db";
import User from "../../../model/User";
import { getSession } from "next-auth/react";

connectDb();
export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;

        const user = await User.findOne({ email });

        if (user) {
          return SignInUser({ password, user });
        } else {
          throw new Error("This user does not exist");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      let user = await User.findById(token.sub);

      session.user._id = token.sub || user._id.toString();
      session.user.role = token.role || user.role;
      session.user.faculty = token.faculty || user.faculty; // Add this line to set faculty information in the session

      token.role = user.role;
      token.faculty = user.faculty; // Add this line to set faculty information in the token

      return session;
    },

    async signOut({ token }) {
      await invalidateSession(token);

      return "/login";
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
};
const SignInUser = async ({ password, user }) => {
  if (!user.password) {
    throw new Error("Please Enter your Password");
  }

  const textPassword = await bcrypt.compare(password, user.password);
  if (!textPassword) {
    throw new Error("Email or Password is Wrong");
  }
  return user;
};

export async function invalidateSession(token) {
  // get the current session from the token
  const session = await getSession({ token });

  // if there's no session, do nothing
  if (!session) return;

  // delete the session from the database
  const client = await clientPromise;
  const db = client.db();
  await db.collection("sessions").deleteOne({ _id: session.id });
}
export default NextAuth(authOptions);
