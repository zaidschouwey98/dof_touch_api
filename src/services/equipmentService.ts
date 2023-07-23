import Equipment from "../database/models/equipment";

export default class EquipmentService
{
    constructor(){
        
    }
    public getById(id:number){

    }

    public getAll(){

    }
    
    public delete(id:number){

    }

    public async update(body:Equipment){
        if(!body.id)
            throw new Error("Id not given.");
    }

    public async create(body:Equipment){
        if(!body.name || !body.lvl)
            throw new Error("Name of lvl is null or undefined.");
        const newEquipment = await Equipment.create(body);
        return newEquipment;
    }
}