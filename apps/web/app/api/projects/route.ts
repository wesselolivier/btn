// pages/api/projects.js
import { sql } from '@vercel/postgres';
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  try {
    const projects = await sql`SELECT * FROM projects`; // Modify the query based on your schema
    return NextResponse.json({ projects: projects.rows }, {status: 200});
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
