DROP TABLE IF EXISTS product_category CASCADE;
CREATE TABLE product_category (
id SERIAL PRIMARY KEY NOT NULL,
category_name VARCHAR(255) NOT NULL,
category_desc TEXT,
created_at TIMESTAMP NOT NULL,
modified_at TIMESTAMP,
deleted_at TIMESTAMP
);