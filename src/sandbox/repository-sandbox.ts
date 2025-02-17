import {itemsRepository} from '../modules/items/items.repository'



const errorMessage = (error:any | unknown) => {
    console.log(`Error al ejecutar la funcion ${error}`)
}

const pruebaFindById = async () => {
    const item_repository = new itemsRepository()
    try {
        const result = await item_repository.findById(10)
        console.log(result)
    } catch (error) {
        errorMessage(error)
    }
}

const pruebaFindAll = async () => {
    const item_repository = new itemsRepository()
    try {
        const result = await item_repository.findAll()
        console.log(result)
    } catch (error) {
        errorMessage(error)
    }
}

const pruebaCreate = async(name:string, description:string) =>{
    const item_repository = new itemsRepository()
    try {
        const result = await item_repository.create(name,description)
        console.log(result)
    } catch (error) {
        errorMessage(error)
    }
}

const pruebaDelete = async(id:number) => {
    const item_repository = new itemsRepository()
    try {
        await item_repository.delete(id)
        console.log('Delete exitoso')
    } catch (error) {
        errorMessage(error)
    }
}

const pruebaUpdate = async(id:number, name:string, description:string) => {
    const item_repository = new itemsRepository()
    try {
        await item_repository.update(id,name,description)
    } catch (error) {
        errorMessage(error)
    }
}



//========================================================//
//pruebaFindById()
pruebaFindAll()
//pruebaCreate('valdimir','y amimirs')
//pruebaDelete(11)
//pruebaUpdate(10,"Josifin","larala")

