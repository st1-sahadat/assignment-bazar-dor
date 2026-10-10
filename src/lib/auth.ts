import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URL as string);
const db = client.db("assignment-bazar-dor");

export const auth = betterAuth({
    emailAndPassword: { 
    enabled: true, 
  }, 
//    emailVerification: {
//     sendOnSignUp: true, 
//     sendVerificationEmail: async ({ user, url, token }, request) => {
//       await Resend.emails.send({
//         from: "Acme <onboarding@yourdomain.com>",
//         to: user.email,
//         subject: "Verify your email address",
//         html: `<p>Click <a href="${url}">here</a> to verify your email.</p>`,
//       });
//     }
// },
  database: mongodbAdapter(db, {
    client,
  }),
});