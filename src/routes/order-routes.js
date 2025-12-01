import OrderController from "../controllers/OrderController.js";
import express from 'express';

const router = express.Router();

router.post("/order", OrderController.createOrder);
router.get("/order/:orderId", OrderController.getOrder);
router.get("/order/list", OrderController.listOrders);
router.put("/order/:orderId", OrderController.updateOrder);
router.delete("/order/:orderId", OrderController.deleteOrder);

export default router;