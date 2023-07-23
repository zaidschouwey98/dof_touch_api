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

    public update(body:any){

    }

    public async create(body:any){
        const newEquipment = await Equipment.create({name:"test",lvl:"1",statistics:"[]",recipe:"[]"})
        return newEquipment;
    }
}