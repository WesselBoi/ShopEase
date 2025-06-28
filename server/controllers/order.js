// filepath: /Users/apple/Desktop/E-Commerce MERN/server/controllers/order.js
const Order = require("../models/order");
const Product = require("../models/product");

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    // ← Add validation for orderItems
    if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0) {
      return res.status(400).json({ error: "No order items provided" });
    }

    // ← Add validation for required fields
    if (!shippingAddress || !paymentMethod) {
      return res.status(400).json({ error: "Shipping address and payment method are required" });
    }

    console.log("Received order data:", {
      orderItems: orderItems.length,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice
    });

    // Verify all products exist and have sufficient stock
    for (let item of orderItems) {
      if (!item._id) {
        return res.status(400).json({ error: "Product ID is required for all items" });
      }

      const product = await Product.findById(item._id);
      if (!product) {
        return res.status(404).json({ error: `Product ${item.name} not found` });
      }
      
      if (product.countInStock < item.qty) {
        return res.status(400).json({
          error: `Not enough stock for ${item.name}. Available: ${product.countInStock}`,
        });
      }
    }

    // ← Fixed: Create order with correct structure
    const order = await Order.create({
      user: req.user._id,
      orderItems: orderItems.map((item) => ({
        name: item.name,
        qty: item.qty,
        image: item.image,
        price: item.price,
        product: item._id,
      })),
      shippingAddress: {
        address: shippingAddress.address,
        city: shippingAddress.city,
        postalCode: shippingAddress.postalCode,
        country: shippingAddress.country,
      },
      paymentMethod,
      itemsPrice: Number(itemsPrice),
      taxPrice: Number(taxPrice),
      shippingPrice: Number(shippingPrice),
      totalPrice: Number(totalPrice),
    });

    // Update product stock
    for (let item of orderItems) {
      await Product.findByIdAndUpdate(item._id, {
        $inc: { countInStock: -item.qty },
      });
    }

    // ← Fixed: Return the created order
    res.status(201).json(order);
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ error: error.message });
  }
};

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user", "name email");

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Check if user owns this order (or is admin)
    if (order.user._id.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: "Not authorized to view this order" });
    }

    res.json(order);
  } catch (error) {
    console.error("Get order error:", error);
    res.status(500).json({ error: error.message });
  }
};

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(orders);
  } catch (error) {
    console.error("Get my orders error:", error);
    res.status(500).json({ error: error.message });
  }
};

// @desc    Get all orders (Admin)
// @route   GET /api/orders
// @access  Private/Admin
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("user", "id name email")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error("Get all orders error:", error);
    res.status(500).json({ error: error.message });
  }
};

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Check if user owns this order
    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ error: "Not authorized to update this order" });
    }

    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer?.email_address,
    };

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    console.error("Update order to paid error:", error);
    res.status(500).json({ error: error.message });
  }
};

// @desc    Update order to delivered (Admin)
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    console.error("Update order to delivered error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrderById,
  getMyOrders,
  getAllOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
};