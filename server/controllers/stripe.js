const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '../.env') });


if (!process.env.STRIPE_SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY environment variable is not set');
  process.exit(1);
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create Payment Intent
const createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency = 'inr', metadata = {} } = req.body;


    if (!amount || amount < 50) { 
      return res.status(400).json({ 
        error: 'Amount must be at least ₹0.50' 
      });
    }

    console.log('Creating payment intent for amount:', amount);

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), 
      currency: currency,
      metadata: {
        ...metadata,
        integration_check: 'accept_a_payment',
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    console.log('Payment intent created:', paymentIntent.id);

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });

  } catch (error) {
    console.error('Stripe Error:', error);
    res.status(500).json({ 
      error: error.message || 'Payment processing failed' 
    });
  }
};

// Confirm Payment
const confirmPayment = async (req, res) => {
  try {
    const { paymentIntentId } = req.body;

    if (!paymentIntentId) {
      return res.status(400).json({
        error: 'Payment Intent ID is required'
      });
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === 'succeeded') {
      res.json({
        success: true,
        paymentIntent: paymentIntent,
        message: 'Payment successful!'
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Payment not completed',
        status: paymentIntent.status
      });
    }

  } catch (error) {
    console.error('Payment confirmation error:', error);
    res.status(500).json({ 
      error: error.message || 'Payment confirmation failed' 
    });
  }
};

// Get Stripe Config (for frontend)
const getStripeConfig = (req, res) => {
  if (!process.env.STRIPE_PUBLISHABLE_KEY) {
    return res.status(500).json({
      error: 'Stripe configuration not available'
    });
  }

  res.json({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
};



module.exports = {
  createPaymentIntent,
  confirmPayment,
  getStripeConfig,
};