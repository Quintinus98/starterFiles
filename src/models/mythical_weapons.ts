import Client from "../database";

export type Weapon = {
    id: number,
    name: string, 
    type: string, 
    weight: number, 
}

export class MythicalWeaponStore {
  async index(): Promise<Weapon[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM mythical_weapons";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Could not get weapons. Error: ${error}`);
            
    }
  }
  async show(id: number): Promise<Weapon> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM mythical_weapons WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not show weapon ${id}. ${error}`);
            
    }
  }
  async create(weapon: { name: string; type: string; weight: number; }): Promise<Weapon> {
    try {
      const conn = await Client.connect();
      const sql = "INSERT INTO mythical_weapons (name, type, weight) VALUES ($1, $2, $3) RETURNING *";
      const result = await conn.query(sql, [weapon.name, weapon.type, weapon.weight]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not add new weapon. ${error}`);
            
    }
  }
  async delete(id: number): Promise<Weapon> {
    try {
      const conn = await Client.connect();
      const sql = "DELETE FROM mythical_weapons WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not delete weapon ${id}. ${error}`);
            
    }
  }
}
