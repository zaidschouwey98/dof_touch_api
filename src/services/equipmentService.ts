import Equipment from "../database/models/equipment";

export default class EquipmentService
{
    public async getById(id:number){
        return await Equipment.findByPk(id)
    }

    public async getAll(){
        return await Equipment.findAll();
    }
    
    public async delete(id:number){
        return await Equipment.destroy({where:{id:id}})
    }

    public async update(body:Equipment){
        if(!body.id)
            throw new Error("Id not given.");
        Equipment.update(body,{where:{id:body.id}});
    }

    public async getByType(type:string){
        return await Equipment.findAll({where:{type:type}})
    }

    public async create(body:Equipment){
        if(!body.name || !body.lvl)
            throw new Error("Name of lvl is null or undefined.");
        const newEquipment = await Equipment.create(body);
        return newEquipment;
    }
}