const {Air} = require ("../models/index")

class AirController{
   async createAir(req, res, next){
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
   return next(e);
}
}
}
module.exports = new AirController();