DROP TABLE IF EXISTS product_inventory CASCADE;
CREATE TABLE product_inventory (
id SERIAL PRIMARY KEY NOT NULL,
quantity INTEGER,
created_at TIMESTAMP NOT NULL,
modified_at TIMESTAMP,
deleted_at TIMESTAMP
);