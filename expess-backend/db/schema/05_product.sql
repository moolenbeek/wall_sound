DROP TABLE IF EXISTS product CASCADE;

CREATE TABLE product (
id SERIAL PRIMARY KEY NOT NULL,
product_name VARCHAR(255) NOT NULL,
manufacturer VARCHAR(255),
serial_number SERIAL,
flex_code SERIAL,
category_id INTEGER REFERENCES category(id),
inventory_id INTEGER REFERENCES product_inventory(id),
price DECIMAL,
discount_id INTEGER REFERENCES discount(id),
created_at TIMESTAMP NOT NULL,
modified_at TIMESTAMP,
deleted_at TIMESTAMP
);