const {Air} = require ("../models/index")
const sequelize = require ('../db')
class AirController{
   async createAir(req, res){
      const { imageUrl, category, price } = req.body;
        try{
         const air =  await Air.create({
            imageUrl,
            category,
            price
         })
         if(air)
                res.json({ status: true, response: air });
  }
  catch(e){
   return console.log(e);
}
}
async getAir (req, res){
   try{
      const air = await Air.findAll({raw: true });
      res.json(air)
  } catch(e){
      return console.log(e);
  }
   
//     return Air.findAll({ raw: true }).then(function (air) {
//       res.render('',{
//          air: air
//      })    
//   });

     // sequelize.query("SELECT * FROM breeze.air", function(err, rows, fields){
   //    if(!err){
   //       console.log(rows)
   //    }else console.log(err)
   // console.log(air.every(air => air instanceof Air));
   // console.log("All users:", JSON.stringify(air, null, 2));
      //  if(err) return console.log(err);
   //  res.end(JSON.stringify(result));
   //  res.end();
      // res.render('index.ejs', {
      //     air: data
      // });
      // console.log(res)
   // })
}
}

module.exports = new AirController();
// https://metanit.com/web/nodejs/8.6.php
// инфа которую надо прочитать https://stackoverflow.com/questions/36214221/findall-from-sequelize-doesnt-get