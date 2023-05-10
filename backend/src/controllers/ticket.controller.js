import { findTicket, createTicket } from "../services/ticketServices.js";

export const getTicket = async (req, res) => {
    try {
        const users = await findTicket()
        res.status(200).send(ticket)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const postTicket = async (req, res) => {
    try {
        const { nombre, email, password } = req.body
        //const {first_name, last_name, email, age, password} = req.body
        const newUser = createTicket({ code, purchase, amount, purchaser })
        //const newUser = createTicket({ nombre, apellido, email, age, password })
        res.status(200).send(newTicket)
    } catch (error) {
        res.status(500).send('Ocurrio un error en postTicket', error)
    }
}
