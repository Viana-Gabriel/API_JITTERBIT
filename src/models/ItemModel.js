import { connection } from "../database/connection.js";

class ItemModel {

  async insert(orderId, items) {
    for (const item of items) {
      await connection.query(
        `INSERT INTO items (orderId, productId, quantity, price)
         VALUES ($1, $2, $3, $4)`,
        [orderId, item.productId, item.quantity, item.price]
      );
    }
  }

  async deleteByOrder(orderId) {
    await connection.query("DELETE FROM items WHERE orderId = $1", [orderId]);
  }

  async findByOrder(orderId) {
    const result = await connection.query(
      "SELECT productId, quantity, price FROM items WHERE orderId = $1",
      [orderId]
    );
    return result.rows;
  }
}

export default new ItemModel();
