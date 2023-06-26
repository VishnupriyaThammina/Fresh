const User = require('../models/userModel');//this is a relative path

// Define route handlers and CRUD operations here
// Create a new user
exports.createUser = async (req, res) => {
    try {
      const {  name, email,password } = req.body;
      const newUser = new User({ name, email,password });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
      console.log(savedUser);
    } catch (error) {
      console.error('Error in registering the user:', error);
      res.status(500).json({ message: 'Error in registering the user' });
    }
  };

  // Get all users
exports.getAllUsers = async(req,res)=>{

    try {
        const users = User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message:"ERROR IN GETTING USERS"});
    }
};

//find by id
exports.findUserById = async(req,res) =>{
try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if(!user){
        res.status(404).json({message : "User Not Found"});
    }else{
        res.json(user);
    }
} catch (error) {
    res.status(500).json({message:"ERROR IN finding USERS"});
    
}
};
//find by email
// Assuming you have imported the necessary modules and defined the User model

exports.findEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email: email });

    if (user) {
      res.json({ exists: true, user: user });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    res.status(404).json({ message: "Error in finding email" });
  }
};


// Update a user by ID
exports.updateUserById = async (req, res) => {
    try {
      const userId = req.params.id;
      const { name, email } = req.body;
      
      const updatedUser = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
      
      if (!updatedUser) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(updatedUser);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating user' });
    }
  };

  // Delete a user by ID
exports.deleteUserById = async (req, res) => {
    try {
      const userId = req.params.id;
      const deletedUser = await User.findByIdAndRemove(userId);
      
      if (!deletedUser) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(deletedUser);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user' });
    }
  };

