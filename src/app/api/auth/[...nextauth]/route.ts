import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare, hash } from 'bcrypt';

import pool from '@/database/connection';

const handler = NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials, req) {
        const client = await pool.connect();
        try {
          const response = await client.query(
            'SELECT * FROM users WHERE email =$1',
            [credentials?.email]
          );
          if (response.rows.length === 0) {
            throw new Error('No user found with this email');
          }
          // email should be unique on signup
          // i think i have already added a constraint
          // dont understand this
          const user = response.rows[0];

          // lets try an actual hash here an see if it will accept it or not
          // lets hash a password

          const testHash = await hash('godzilla1', 10);
          const testComparison = await compare('godzilla1', testHash);

          console.log(
            'Here is the results of the test comparison',
            testComparison,
            testHash
          );

          const isValidPassword = await compare(
            credentials?.password || '',
            user.password
          );
          console.log(
            'the values to compare',
            credentials?.password,
            user.password
          );
          console.log('is it a valid password:', isValidPassword);

          if (isValidPassword) {
            return { id: user.id, email: user.email };
          }
          console.log({ credentials });
          return null;
        } finally {
          client.release();
        }

        // Return null if user data could not be retrieved
      },
    }),
  ],
});

export { handler as GET, handler as POST };
