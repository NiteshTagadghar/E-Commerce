const { get } = require('mongoose');
const User = require('../models/user_model');
const { default: axios } = require('axios');

const createUser = async (userData) => {
  try {
    const user = new User({
      userName : userData.userName,
      password : userData.password,
      userId : userData.userId

    });
    console.log(user, 'user data')
    return await user.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUser = async (userName, password) => {
  try {
    const user = await User.findOne({ userName: userName, password: password })
    return user
  } catch (error) {
    throw new Error(err.message)
  }
}

function getApi(slug, waitTimeInSeconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(slug + " " + waitTimeInSeconds)
    }, 1000 * waitTimeInSeconds)
  })
}




module.exports = { createUser, getUser };
