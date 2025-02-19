import {itemsRepository} from "./items.repository"

export class itemsService {

    private  items_repository = new itemsRepository()
    
    getById = async (id:number) => {return await this.items_repository.findById(id)}

    getAll = async () => { return await this.items_repository.findAll()}

    create = async (name:string, description:string) => {return await this.items_repository.create(name,description)}
    
    delete = async (id:number) => {return await this.items_repository.delete(id)}

    update = async (id:number, name:string, description:string) => {return await this.items_repository.update(id,name,description)}
}
