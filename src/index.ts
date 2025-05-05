import express from 'express';
import UsuarioRutas from './routes/UsuarioRutas';
import { sequal } from './config/database';

const app = express();
app.use(express.json());
app.use('/api/usuarios', UsuarioRutas)

//funcion anonima ()) =>
sequal.sync({ alter: true })
.then(
    () => {
        console.log('Base de datos conectada');
        app.listen(3000,
            () => {
                console.log('El servidor esta ejecutandose en el puerto 3000');
            });
    })
.catch((error) => {
    console.error('No se puede conectar a la Base de datos', error);
})