
export const createTicket = async (ticket) => {
    try {
        const newTicket = new ticketModel(ticket)
        await newTicket.save()
        return newTicket
    } catch (error) {
        return error
    }
}

export const findTicket = async () => {
    try {
        const ticket = await ticketModel.getTicket()
        return ticket
    } catch (error) {
        return error
    }

}
