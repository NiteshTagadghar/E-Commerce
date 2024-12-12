const { createUser, getUser } = require('../services/user_service');
const { v4: uuidv4 } = require('uuid');


const createUserController = async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({ message: 'userName and password are required' });
  }

  try {
    const userId = uuidv4()
    const user = await createUser({ userName, password, userId });

    return res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

// Get user by username and password
const getUserController = async (req, res) => {
  const { userName, password } = req.body

  if (!userName || !password) {
     res.status(400).json({ message: 'userName and password are required' });
  }

  try {
    const user = await getUser(userName, password)

     res.status(201).json(user);

  } catch (error) {
     res.status(500).json({ message: 'Username or password is incorrect', error: error.message });

  }
}

module.exports = { createUserController, getUserController };
