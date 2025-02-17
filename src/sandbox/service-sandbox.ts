import {itemsService} from "../modules/items/items.service"

const service = new itemsService()

const getAllTest = async() => {
    const result = await service.getAll()
    console.log("Get all")
    console.log(result)
}

const getByIdTest = async (id:number) => {
    const result = await service.getById(id)
    console.log("get By Id")
    console.log(result)
}

const createTest = async (name:string, description:string) => {
    const result = await service.create(name, description)
    console.log("Create")
    console.log(result)
}

const deleteTest = async (id:number) => {
    const result = await service.delete(id)
    console.log("Delete")
    console.log(result)
}

const updateTest = async (id:number, name:string, description:string) => {
    const result = await service.update(id,name,description)
    console.log("Update")
    console.log(result)
}

//getAllTest()
//getByIdTest(10)
//createTest("ejemplo",'ejemplo des')
//deleteTest(9)
//updateTest(10,"josifinaaaa","pharrel")