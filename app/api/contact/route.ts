import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.company) {
      return NextResponse.json(
        { error: "Name, email, and company are required" },
        { status: 400 }
      );
    }

    // Simulate network delay and backend processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Here you would typically integrate with a CRM, database, or email service
    console.log("Received new lead:", body);

    return NextResponse.json(
      { message: "Lead captured successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
