import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  service: z.string().min(1),
  date: z.string().min(1),
  message: z.string().optional(),
  locale: z.enum(["en", "ar"]).optional().default("en"),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = bookingSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_input", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const booking = await prisma.booking.create({ data: parsed.data });

  return NextResponse.json({ id: booking.id }, { status: 201 });
}
