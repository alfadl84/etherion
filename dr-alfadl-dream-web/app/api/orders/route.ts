import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const orderSchema = z.object({
  productIndex: z.number().int().min(0),
  productTitle: z.string().min(1),
  price: z.number().positive(),
  currency: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  locale: z.enum(["en", "ar"]).optional().default("en"),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = orderSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_input", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const order = await prisma.order.create({ data: parsed.data });

  return NextResponse.json({ id: order.id }, { status: 201 });
}
