const userModel = require("./userController");

exports.registerUser = async (req, res) => {
  try {
   
     
      const savedUser = await userModel.createUser(req, res);
      res.status(201).json(savedUser);
      
    
  } catch (error) {
    res.status(500).json({ message: "Error in registering the user" });
  }
};


