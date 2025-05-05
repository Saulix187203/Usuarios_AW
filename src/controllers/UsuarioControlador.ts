import { Request, Response } from "express";
import { UsuarioServicio } from "../services/UsuarioServicio";
import { UsuarioModel } from "../models/UsuarioModel"; 
import { UsuarioServicioIMP } from "../services/UsuarioServicioIMP";

export class UsuarioControlador{

    private us: UsuarioServicio;

        constructor(){
            this.us = new UsuarioServicioIMP();
        }

    async findAll(req: Request, res: Response){
        try {
            const usuarios: UsuarioModel[] = await this.us.findAll();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({message: "Usuarios no encomntrados"});
        }
    }
    async findByID(req: Request, res: Response){
        console.log("FindID");
        try {
            const usuario: UsuarioModel | null = await this.us.findByID(Number(req.params.id));
            if(usuario === null){
                res.status(404).json({message: "Usuario no encontrado"});
                return;
            }
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({message: "Usuarios no encontrados"});
        }

    }
    async findByIDRequestParams(req: Request, res: Response){
        console.log("FindID");
        try {
            const usuario: UsuarioModel | null = await this.us.findByID(Number(req.query.id));
            if(usuario === null){
                res.status(404).json({message: "Usuario no encontrado"});
                return;
            }
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({message: "Usuarios no encontrados"});
        }
}
}