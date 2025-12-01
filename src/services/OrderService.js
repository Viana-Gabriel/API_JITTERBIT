import OrderModel from "../models/OrderModel.js";
import ItemModel from "../models/ItemModel.js";

class OrderService {

  transformInput(body) {
    return {
      orderId: body.numeroPedido,
      value: body.valorTotal,
      creationDate: body.dataCriacao,
      items: body.items.map(i => ({
        productId: Number(i.idItem),
        quantity: i.quantidadeItem,
        price: i.valorItem
      }))
    };
  }

  async createOrder(data) {
    const order = this.transformInput(data);

    order.creationDate = new Date().toISOString();
    
    await OrderModel.create(order);
    await ItemModel.insert(order.orderId, order.items);

    return order;
  }

  async getOrder(orderId) {
    const order = await OrderModel.findById(orderId);
    if (!order) return null;

    const items = await ItemModel.findByOrder(orderId);

    return { ...order, items };
  }

  async listOrders() {
  const orders = await OrderModel.findAll();
  return orders.map(o => ({
    orderId: o.orderid,
    value: o.value,
    creationDate: o.creationdate
  }));
}

  async updateOrder(orderId, data) {
    const order = this.transformInput(data);

    await OrderModel.update(orderId, order);
    await ItemModel.deleteByOrder(orderId);
    await ItemModel.insert(orderId, order.items);

    return { message: "Pedido atualizado com sucesso" };
  }

  async deleteOrder(orderId) {
    await ItemModel.deleteByOrder(orderId);
    await OrderModel.delete(orderId);
  }
}

export default new OrderService();
