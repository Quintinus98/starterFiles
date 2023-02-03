import bcrypt from "bcrypt";
import dotenv from "dotenv";


import Client from "../database";

dotenv.config();

const {
  SALT_ROUNDS,
  BCRYPT_PASSWORD
} = process.env;

export type user = {
    id?: number,
    firstname: string,
    lastname: string,
    username: string, 
    password: string,
}

export class User {
  async index(): Promise<user[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM users";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async show(id: number): Promise<user> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM users WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      if (!result.rows[0]) {
        throw new Error(`User with id = ${id}, does not exist.`);
      }
      return result.rows[0];
    } catch (error) {
      throw new Error(`User not found. ${error}`);
    }
  }
  async create(u: user): Promise<user> {
    try { 
      const conn = await Client.connect();
      const pepper = (BCRYPT_PASSWORD as unknown) as string;
      const saltRounds = parseInt((SALT_ROUNDS as unknown) as string);
      const sql = "INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4) RETURNING *";

      const hash = bcrypt.hashSync(u.password + pepper, saltRounds);
      
      const result = await conn.query(sql, [u.firstname, u.lastname, u.username, hash]);
      const newUser = result.rows[0];
      conn.release();

      return newUser;
    } catch (error) {
      throw new Error(`Could not add new user. ${error}`);
    }
  }
  async delete(id: number): Promise<string> {
    try {
      const conn = await Client.connect();
      const sql = "DELETE FROM users WHERE id=($1)";
      await conn.query(sql, [id]);
      conn.release();
      
      return "Deleted successfully!";
    } catch (error) {
      throw new Error(`Could not delete user ${id}. ${error}`);
            
    }
  }
}
