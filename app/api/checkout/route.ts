import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { supabase } from "@/lib/supabase";
import type { CartItem } from "@/context/CartContext";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const SHIPPING = 1500; // 15.00 PLN in grosze

export async function POST(req: NextRequest) {
  const { items }: { items: CartItem[] } = await req.json();

  if (!items?.length) {
    return NextResponse.json({ error: "Koszyk jest pusty" }, { status: 400 });
  }

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const total = subtotal + SHIPPING;

  // Create pending order in Supabase first so we can reference it in the webhook
  const { data: order, error } = await supabase
    .from("orders")
    .insert({
      items: items.map((i) => ({
        product_id: i.productId,
        variant_id: i.variantId,
        quantity: i.quantity,
        price: i.price,
      })),
      total,
      status: "pending",
      email: "",
    })
    .select("id")
    .single();

  if (error || !order) {
    return NextResponse.json({ error: "Błąd tworzenia zamówienia" }, { status: 500 });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      ...items.map((item) => ({
        price_data: {
          currency: "pln",
          unit_amount: item.price,
          product_data: { name: `${item.name} — ${item.size}` },
        },
        quantity: item.quantity,
      })),
      {
        price_data: {
          currency: "pln",
          unit_amount: SHIPPING,
          product_data: { name: "Dostawa" },
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    customer_email: undefined,
    metadata: { order_id: order.id },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/zamowienie/potwierdzone?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/koszyk`,
  });

  return NextResponse.json({ url: session.url });
}
