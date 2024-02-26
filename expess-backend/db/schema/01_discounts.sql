DROP TABLE IF EXISTS discount CASCADE;
CREATE TABLE discount (
id SERIAL PRIMARY KEY NOT NULL,
discount_name VARCHAR(255) NOT NULL,
discount_desc TEXT,
discount_percent DECIMAL NOT NULL,
active BOOLEAN NOT NULL,
created_at TIMESTAMP NOT NULL,
modified_at TIMESTAMP,
deleted_at TIMESTAMP
);