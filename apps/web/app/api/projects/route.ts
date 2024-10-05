// pages/api/projects.js
import { sql } from '@vercel/postgres';
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    try {
      const projects = await sql`SELECT * FROM projects`;
      return NextResponse.json({ projects: projects.rows }, { status: 200 });
    } catch (error) {
      console.error("Database query failed:", (error as Error).message);
      return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
  }
  
