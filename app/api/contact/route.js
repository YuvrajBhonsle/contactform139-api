import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";

export async function POST(req) {
  const { name, email, phone, country, message } =
    await req.json();

  console.log("Name:" + name);
  console.log("Email:" + email);
  console.log("Phone:" + phone);
  console.log("Country:" + country);
  console.log("Message:" + message);

  try {
    await connectDB();
    await Contact.create({
      name,
      email,
      phone,
      country,
      message,
    });

    return NextResponse.json({
      msg: "Data sent to MongoDB successfully",
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }

      return NextResponse.json({ msg: errorList });
    } else {
      NextResponse.json(error);
    }
  }

  // return NextResponse.json({ msg: ["Response get successfully"] });
}
