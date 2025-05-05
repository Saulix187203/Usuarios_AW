import {
    Table,
    Column,
    DataType,
    Model,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    Unique,
    IsEmail,
    Min
} from 'sequelize-typescript';

@Table({
    tableName: "TBusuarios",
    timestamps: false,
})
export class UsuarioModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    idTBusuarios!: number;

    @AllowNull(false)
    @Unique
    @Column(DataType.STRING(45))
    usuario!: string;

    @AllowNull(false)
    @Column(DataType.STRING(45))
    nombres!: string;

    @AllowNull(false)
    @Column(DataType.STRING(45))
    apellidos!: string;

    @AllowNull(false)
    @Min(18)
    @Column(DataType.INTEGER)
    edad!: number;

    @AllowNull(false)
    @Column(DataType.ENUM("MASCULINO", "FEMENINO"))
    genero!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    contraseña!: string;

    @AllowNull(false)
    @Unique
    @IsEmail
    @Column(DataType.STRING(45))
    correo!: string;
}
