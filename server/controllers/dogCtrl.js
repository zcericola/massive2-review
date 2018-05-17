// module.exports = {
//      getDogs: (req,res,next) => {

//       }
//   }
  
  const getDogs = (req, res, next) => {
    req.app
    .get("dbInstance")
    .getAllDogs()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
    });
  };
  
  const addDog =(req,res, next) => {
    const {name, age, isGood} = req.body;
    req.app.get('dbInstance').addDog(name, age, isGood).then(response => {
      res.status(200).json(response);
    }).catch(err => {
      console.log(err);
    })
    
  };
  module.exports = {
    getDogs,
    addDog
  };
  
  