import { connect } from "mongoose";

export const startConnection = async () => {
    const db = await connect('mongodb://localhost/mevn-database');
    try {
        console.log(db.connection.name);
    } catch (error) {
        console.log(error);
    }
};