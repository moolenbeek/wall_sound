DROP TABLE IF EXISTS discount CASCADE;
CREATE TABLE discount (
id SERIAL PRIMARY KEY NOT NULL,
discount_name VARCHAR(255) NOT NULL,
discount_desc TEXT,
discount_percent DECIMAL,
active BOOLEAN,
created_at TIMESTAMP,
modified_at TIMESTAMP,
deleted_at TIMESTAMP
);