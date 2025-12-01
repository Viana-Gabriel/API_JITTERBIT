import OrderService from "../services/OrderService.js";

class OrderController {

  async createOrder(req, res) {
    try {
      const order = await OrderService.createOrder(req.body);
      return res.status(201).json(order);

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

    async listOrders(req, res) {
    try {
      const orders = await OrderService.listOrders();
      return res.json(orders);

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getOrder(req, res) {
    try {
      const order = await OrderService.getOrder(req.params.orderId);
      if (!order) return res.status(404).json({ error: "Pedido não encontrado" });
      return res.json(order);

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }



  async updateOrder(req, res) {
    try {
      const result = await OrderService.updateOrder(req.params.orderId, req.body);
      return res.json(result);

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async deleteOrder(req, res) {
    try {
      await OrderService.deleteOrder(req.params.orderId);
      return res.json({ message: "Pedido deletado com sucesso" });

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

}

export default new OrderController();