CREATE TABLE IF NOT EXISTS mythical_weapons (name VARCHAR(100), type VARCHAR(50), weight integer, id SERIAL PRIMARY KEY);
CREATE TABLE IF NOT EXISTS users (firstname VARCHAR(100), lastname VARCHAR(100), username VARCHAR(100), password text, id SERIAL PRIMARY KEY);