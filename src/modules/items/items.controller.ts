import {Request, Response} from "express" 
import {itemsService} from "./items.service"

const moduleAndEndPointMessage = (endP:string,module:string) => {console.log(`[${endP}] ==> ${module}`)}

const sendResponse = (res: Response, status: number, message?: string, data?: any) => {
    switch (status) {
        case 200:
            console.log(`✅ Éxito en ${res.req?.path}`);
            res.status(200).json({ message: message ?? 'Operación exitosa', data });
            break;

        case 201:
            console.log(`✅ Creación exitosa en ${res.req?.path}`);
            res.status(201).json({ message: message ?? 'Recurso creado exitosamente', data });
            break;

        case 500:
            console.error(`❌ Error en ${res.req?.path}:`, message);
            res.status(500).json({ message: message ?? 'Error interno del servidor' });
            break;

        default:
            res.status(status).json({ message: message ?? 'Respuesta no manejada' });
            break;
    }
};

const handleRequest = (fn: (req: Request, res: Response) => Promise<any>) => {
    return async (req: Request, res: Response) => {  // Añadido el `return` explícito
        try {
            await fn(req, res);
        } catch (error: unknown) {
            sendResponse(res, 500, error instanceof Error ? error.message : 'Error desconocido');
        }
    };
};


export class ItemsController {
    private service = new itemsService()
    
    create = handleRequest(async (req , res) => {
        moduleAndEndPointMessage("Items", "Create");
        const data = req.body;
        res.status(201).json(await this.service.create(data.name, data.description))
    })
    
    getAll = handleRequest(async (req , res) => {
        moduleAndEndPointMessage("Items","GetAll");
        res.status(200).json(await this.service.getAll())
    })

    getById = handleRequest(async (req , res) => {
        moduleAndEndPointMessage("Items", "GetById");
        const id = parseInt(req.params.id,10)
        res.status(200).json(await this.service.getById(id))
    })

    delete = handleRequest(async(req , res) => {
        moduleAndEndPointMessage("Items","Delete");
        const id:number = parseInt(req.params.id,10)
        res.status(200).json(await this.service.delete(id))
    })

    update = handleRequest(async(req , res) => {
        moduleAndEndPointMessage("Items","Update");
        const id:number = parseInt(req.params.id, 10);
        const data = req.body;
        res.status(200).json(await this.service.update(id, data.name, data.description))
    })
}



