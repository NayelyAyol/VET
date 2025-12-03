import {Router} from 'express'
import { registrarPaciente } from '../controllers/paciente_controller.js'

const router = Router()

router.post('/paciente/registro', registrarPaciente)

//patch no es un cambio completo sino superficial en cambio el put si es un cambio completo



export default router