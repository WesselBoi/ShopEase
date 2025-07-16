const express = require("express");

const {
  createPaymentIntent,
  confirmPayment,
  getStripeConfig,
} = require("../controllers/stripe");

const router = express.Router();

router.get("/config", getStripeConfig);

router.post("/create-payment-intent", createPaymentIntent);

router.post("/confirm-payment", confirmPayment);

module.exports = router;
