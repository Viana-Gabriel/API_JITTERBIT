# 📦 API de Pedidos – Jitterbit

Esta é uma API REST construída em **Node.js**, **Express** e **PostgreSQL** para cadastro, consulta, listagem, atualização e remoção de pedidos e itens.

A API segue arquitetura **MVC**.

---

## 🚀 Tecnologias utilizadas
- Node.js
- Express
- PostgreSQL
- Nodemon
- Dotenv
- pg (driver do PostgreSQL)

---

## 📁 Estrutura de Pastas

```
/src
 ├── controllers
 ├── services
 ├── models
 ├── routes
 ├── database
 │     └── connection.js
 ├── index.js
.env
```

---

## 🛠️ Requisitos

Antes de iniciar, instale:

- **Node.js** (>= 18)
- **PostgreSQL** (>= 14)
- Postman ou Insomnia

---

## ⚙️ Configuração do Banco de Dados

Crie um banco no PostgreSQL:

```sql
CREATE DATABASE ordersdb;
```

Depois crie as tabelas:

```sql
CREATE TABLE orders (
    orderId VARCHAR(50) PRIMARY KEY,
    value DECIMAL(10,2),
    creationDate TIMESTAMP
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    orderId VARCHAR(50),
    productId INT,
    quantity INT,
    price DECIMAL(10,2),
    FOREIGN KEY (orderId) REFERENCES orders(orderId)
);
```

---

## 🔐 Configuração do arquivo `.env`

Crie um arquivo `.env` na raiz e inclua:

```
APP_PORT=3000

DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=ordersdb
DB_PASSWORD=(sua senha)
DB_PORT=5432
```

---

## ▶️ Como rodar o projeto

### 1. Instale as dependências
```
npm install
```

### 2. Inicie o servidor em modo desenvolvimento
```
npm run dev
```

### 3. Ou execute manualmente
```
node src/index.js
```

O servidor iniciará em:

```
http://localhost:3000
```

---

## 📡 Rotas da API

| Método | Rota               | Descrição                |
|--------|--------------------|--------------------------|
| `POST` | `/order`           | Cria um novo pedido      |
| `GET`  | `/order/:id`       | Busca um pedido          |
| `GET`  | `/order/list`      | Lista todos os pedidos   |
| `PUT`  | `/order/update/:id`| Atualiza um pedido       |
| `DELETE` | `/order/delete/:id` | Remove um pedido       |

---

## 📝 Exemplos de Requisições (Postman)

### ➤ Criar Pedido  
**POST** `/order`

Body:
```json
{
  "numeroPedido": 1,
  "valorTotal": 150.75,
  "items": [
    { "idItem": 10, "quantidadeItem": 2, "valorItem": 50.00 },
    { "idItem": 20, "quantidadeItem": 1, "valorItem": 50.75 }
  ]
}
```

---

### ➤ Buscar Pedido  
**GET** `/order/1`

---

### ➤ Listar Pedidos  
**GET** `/order/list`

---

### ➤ Atualizar Pedido  
**PUT** `/order/update/1`

Body:
```json
{
  "numeroPedido": 1,
  "valorTotal": 200.50,
  "items": [
    { "idItem": 30, "quantidadeItem": 3, "valorItem": 50.00 },
    { "idItem": 40, "quantidadeItem": 1, "valorItem": 50.50 }
  ]
}
```

---

### ➤ Deletar Pedido  
**DELETE** `/order/delete/1`

---

## 🧪 Testando no Postman

1. Abra o Postman  
2. Crie uma nova Collection  
3. Adicione as requisições acima  
4. Use `http://localhost:3000` como URL base  
5. Envie os requests normalmente  

---

