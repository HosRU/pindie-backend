const mongoose = require("mongoose");
const DB_URL = 'mongodb://localhost:27017/pindie';

async function connectToDataBase(){
    try{
        await mongoose.connect(DB_URL);
        console.log("Успешное подключение к БД")
    }catch(error){
        console.log("Не удалось подключиться к БД")
        console.error(error)
    }
}

module.exports = connectToDataBase;