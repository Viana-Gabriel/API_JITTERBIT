import { connection } from "../database/connection";

class OrderModel {
  
  async create(order) {
    const query = `
      INSERT INTO orders (orderId, value, creationDate)
      VALUES ($1, $2, $3)
    `;
    await connection.query(query, [
      order.orderId,
      order.value,
      order.creationDate
    ]);
  }

  async findById(orderId) {
    const result = await connection.query(
      "SELECT * FROM orders WHERE orderId = $1",
      [orderId]
    );
    return result.rows[0];
  }

  async findAll() {
    const result = await connection.query("SELECT * FROM orders");
    return result.rows;
  }

  async update(orderId, orderData) {
    await connection.query(
      "UPDATE orders SET value = $1, creationDate = $2 WHERE orderId = $3",
      [orderData.value, orderData.creationDate, orderId]
    );
  }

  async delete(orderId) {
    await connection.query("DELETE FROM orders WHERE orderId = $1", [orderId]);
  }
}

export default new OrderModel()
