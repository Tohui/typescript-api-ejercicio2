import {RowDataPacket} from 'mysql2'
import {connection} from "../../databases/database"
import { Pool } from 'mysql2/typings/mysql/lib/Pool'

export class itemsRepository {

   private async queryRows<T extends RowDataPacket>(sql:string, params:any[]):Promise<T[]>{
    const [rows] = await connection.query<T[]>(sql,params)
    return rows
   }

   private async queryExecute (sql:string, params:any){
    await connection.query(sql,params)
   }


   findById = async (id: number) => {
    return this.queryRows("SELECT * FROM items WHERE id = ?", [id])}

   findAll = async () => {
    return this.queryRows("SELECT * FROM items", [])} 

    create = async (name:string, description:string) => {
        return this.queryExecute("INSERT INTO items (name, description) VALUES (?,?)",[name,description])
    }

    delete = async (id:number) => {
        return this.queryExecute("DELETE FROM items where id = ?",[id])
    }

    update = async (id:number, name:string, description:string) => {
        return this.queryExecute("UPDATE items SET name=?, description=? WHERE id=? ",[name, description,id])
    }


}