import { ManagerMongoDB } from "../db/mongoDBManager.js";
import { Schema, now } from "mongoose";

const ticketSchema = new Schema({    
    code: {
        type: String,
        unique: true
    },
    purchase_datetime,
    amount: Number,
    purchaser: {
        type: String,
        unique:true
    }
})

export class ManagerTicketMongoDB extends ManagerMongoDB {
    constructor() {
        super(process.env.MONGODBURL, "tickets", ticketSchema)
        //Aqui irian los atributos propios de la clase
    }
    //Aqui irian los metodos propios de la clase
}