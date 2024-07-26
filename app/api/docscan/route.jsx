// app/api/nsfw/route.js
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  const { img, key } = await req.json();
  const url = `https://api.pixlab.io/docscan?img=${encodeURIComponent(
    img
  )}&type=passport&key=${key}`;
  try {
    const response = await axios.get(url);

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.response?.data?.message || error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}
