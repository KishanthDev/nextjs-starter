import { NextResponse } from "next/server"

export async function GET() {
    try {
        const res = await fetch("https://dbapiservice.onrender.com/dbapis/v1/pincodes")
        const data = await res.json()
        return NextResponse.json(data)
    } catch (error) {
        return new NextResponse("Failed to fetch pincodes", { status: 500 })
    }
}
