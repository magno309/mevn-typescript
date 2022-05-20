import { Schema, model } from "mongoose";
import { format } from 'date-fns'

const taskSchema = new Schema({
    clientName: {
        type: String,
        required: true,
        trim: true
    },
    clientPhone: {
        type: String,
        required: true,
        trim: true
    },
    clientAddress: {
        type: String,
        required: true,
        trim: true
    },
    serviceDescription: {
        type: String,
        required: true,
        trim: true
    },
    serviceRegisterDate: {
        type: String,
        default: format(new Date(), 'dd/MM/yyyy'),
        trim: true
    },
    serviceDone: {
        type: Boolean,
        default: false,
    },
});

export default model('Task', taskSchema);