import { UsuarioModel } from "../models/UsuarioModel";

export class UsuarioRepo{

    async findAll():Promise<UsuarioModel[]>{
        // await es un tiempo de espera para reolsver la promesa
        return await UsuarioModel.findAll(); 
    }

    async findById(idTBusuarios: number):Promise<UsuarioModel|null>{
        return UsuarioModel.findByPk(idTBusuarios);
    }

    async findByIDRequestParams(idTBusuarios: number):Promise<UsuarioModel|null>{
        return UsuarioModel.findByPk(idTBusuarios);
    }

    /* async create(nuevo_usuario: Partial<UsuarioModel>):Promise<UsuarioModel>{
        return UsuarioModel.create(nuevo_usuario);
    }

    async update(idTBusuarios: number, usuario: UsuarioModel):Promise<[number, UsuarioModel[]]>{
        return UsuarioModel.update(usuario,{
            where:{
                idTBusuarios
            }
        });
    }

    async delete(idTBusuarios: number):Promise<[number]>{
        return UsuarioModel.destroy({
            where:{
                idTBusuarios
            }
        });
    } */
}