import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PLANS, PlanKey, DurationKey } from '@/lib/pricing';

// Initialize Stripe with secret key
// Note: In production, ensure STRIPE_SECRET_KEY is set in environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-02-25.clover',
});

export async function POST(req: Request) {
  try {
    const { planId, duration } = await req.json();

    // 1. Validate the plan
    const plan = PLANS[planId as PlanKey];
    if (!plan) {
      return NextResponse.json({ error: 'Invalid plan selected' }, { status: 400 });
    }

    const price = (plan.prices as any)[duration];
    if (!price) {
      return NextResponse.json({ error: 'Invalid duration selected' }, { status: 400 });
    }

    // 2. Create Checkout Session
    // In a real scenario, you'd use Stripe Price IDs. 
    // For this implementation, we'll use 'ad-hoc' line items for flexibility.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: `${plan.title} - ${duration}`,
              description: `RecapReels Cinematic Production Service`,
            },
            unit_amount: price * 100, // Stripe expects amount in paise
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/services`,
      metadata: {
        planId,
        duration,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe Error:', err);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
