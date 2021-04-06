const {Work} = require ("../models/index")
const sequelize = require ('../db')
class WorkController{
   async createWorkObject(req, res){
      const { imageUrl, category } = req.body;
        try{
         const work =  await Work.create({
            imageUrl,
            category
         })
         if(work)
                res.json({ status: true, response: work });
  }
  catch(e){
   return console.log(e);
}
}
async getWork (req, res){
   try{
      const work = await Work.findAll({raw: true });
      res.json(work)
  } catch(e){
      return console.log(e);
  }
}
}

module.exports = new WorkController();