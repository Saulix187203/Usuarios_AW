import { Sequelize } from "sequelize-typescript";
import { UsuarioModel } from "../models/UsuarioModel";

export const sequal = new Sequelize({
    database: "DBusers",
    username: "root",
    password: "Slugterra",
    host: "localhost",
    dialect: "mysql",
    models: [UsuarioModel],
})