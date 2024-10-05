import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import pool from '@/database/connection';

// we need to use

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    //validate email and password here, min characters etc for password, you can use a library like ZOD for validating, use validation here
    console.log({ email, password });

    const hashedPassword = await hash(password, 10);

    const client = await pool.connect();
    try {
      await client.query(
        'INSERT INTO users (email, password) VALUES ($1, $2)',
        [email, hashedPassword]
      );
    } finally {
      client.release();
    }

    return NextResponse.json({ message: 'User created successfully' });
  } catch (e) {
    console.log(e);
  }

  return NextResponse.json({ messsage: 'success' });
}
