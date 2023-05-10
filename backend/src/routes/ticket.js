
import { Router } from 'express'
import { getTicket, postTicket } from "../controllers/ticket.controller.js";

const routerTicket = Router()

routerTicket.get('/', getTicket)
routerTicket.post('/', postTicket)

export default routerTicket
