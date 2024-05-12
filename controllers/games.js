const sendAllGames = (req, res) => {
  console.log("Отобразил все доступные игры");
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.gamesArray));
};

const sendCreateGame = (req, res) => {
  console.log("Добавил игру в БД");
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.game));
};

const sendGameById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.game));
};

const sendGameUpdate = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end({ message: "Игра обновлена" });
};

const sendDeleteGame = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.game));
};

module.exports = 
  sendAllGames,
  sendCreateGame,
  sendGameById,
  sendGameUpdate,
  sendDeleteGame

