import { Router } from "express";
import { UsuarioControlador } from "../controllers/UsuarioControlador";

const router = Router();
const usc = new UsuarioControlador();

router.get('/', usc.findAll.bind(usc));
router.get('/ID_:id', usc.findByID.bind(usc)); // aqui la ruta deberia ser: http://localhost:3000/api/usuarios/id
router.get('/findByIDRequestParams', usc.findByIDRequestParams.bind(usc)); 
export default router;