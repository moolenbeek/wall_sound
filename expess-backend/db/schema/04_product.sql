DROP TABLE IF EXISTS product CASCADE;
CREATE TABLE product (
id SERIAL PRIMARY KEY NOT NULL,
product_name VARCHAR(255) NOT NULL,
product_desc TEXT,
SKU VARCHAR(255),
category_id INTEGER REFERENCES product_category(id),
inventory_id INTEGER REFERENCES product_inventory(id),
price DECIMAL,
discount_id INTEGER REFERENCES discount(id),
created_at TIMESTAMP NOT NULL,
modified_at TIMESTAMP,
deleted_at TIMESTAMP
);