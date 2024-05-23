const sendAllUsers = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.usersArray));
};

const sendCreateUser = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

const sendUserId = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

const sendUpdateUser = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end({ message: "Пользователь обновлен" });
};

const sendDeleteUser = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

const sendMe = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
};

module.exports = {
  sendAllUsers,
  sendCreateUser,
  sendUserId,
  sendUpdateUser,
  sendDeleteUser,
  sendMe
};
