// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const config = require("config")
// const Url = config.get('Parametrs.dbUrl'); 

// // установка схемы
// const airScheme = new Schema({
//     category: String,
//     imageUrl: String,
//     price: Number,
//     id:Number
// });
  
// // подключение
// mongoose.connect("mongodb+srv://Tazer16179:161789923Tt@breeze-crimea.ynmre.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });
  
// const Air = mongoose.model("Air", airScheme);
// const air = new Air({
//     category: "Ballu",
//     imageUrl: "",
//     price:1000,
//     id:1
// });
  
// air.save(function(err){
//     mongoose.disconnect();  // отключение от базы данных
      
//     if(err) return console.log(err);
//     console.log("Сохранен объект", air);
// });