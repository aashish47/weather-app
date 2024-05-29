import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=5&language=en&format=json`);
    if (res.ok) {
        const results = await res.json();
        return Response.json(results);
    } else {
        return Response.error();
    }
}
