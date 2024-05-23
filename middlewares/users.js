const users = require("../models/user");
const bcrypt = require("bcryptjs");

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({});
  next();
};

const createUser = async (req, res, next) => {
    console.log("POST /users");
  try {
    req.user = await users.create(req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка создания пользователя" }));
  }
};

const findUserId = async (req, res, next) => {
  try {
    req.user = await users.findById(req.params.id);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send(JSON.stringify({ message: "Пользователь не найдена" }));
  }
};

const updateUser = async (req, res, next) => {
    console.log("PUT /users");
  try {
    req.user = await users.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(400)
      .send(JSON.stringify({ message: "Не удалось обновить пользователя" }));
  }
};

const deleteUser = async (req, res, next) => {
    console.log("DELETE /users");
  try {
    req.user = await users.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(404)
      .send(JSON.stringify({ message: "Не удалось удалить пользователя" }));
  }
};

const checkEmptyNameAndEmailAndPassword = (req, res, next) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Введите имя, email и пароль" }));
  } else {
    next();
  }
};

const checkEmptyNameAndEmail = (req, res, next) => {
  if (!req.body.username || !req.body.email) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Заполни все поля" }));
  } else {
    next();
  }
};

const filterPassword = (req, res, next) => {
    const filterUser = (user) => {
        const {password, ...userWithoutPassword} = user.toObject();
        return userWithoutPassword;
    }

    if(req.user){
        req.user = filterUser(req.user);
    }
    if(req.usersArray){
        req.usersArray = req.usersArray.map((user) => filterUser(user))
    }
    next();
};

const hashPassword = async (req, res, next) => {
  try{
    const salt = await bcrypt.genSalt(10);
    const hash =  await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка хеширования пароля" });
  }
}

const checkIsUserExists = async (req, res, next) => {
  const isInArray = req.usersArray.find((user) => {
    return req.body.email === user.email;
  });
  if (isInArray) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Пользователь с таким email уже существует" }));
  } else {
    next();
  }
}; 

module.exports = {
  findAllUsers,
  createUser,
  findUserId,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  checkIsUserExists,
  filterPassword,
  hashPassword,
};
