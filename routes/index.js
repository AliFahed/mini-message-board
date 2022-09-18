var express = require("express");
var router = express.Router();

const messages = [
  {
    user: "Ali",
    text: "Hey Everyone",
    added: new Date(),
  },
  {
    user: "Draco",
    text: "Hey",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Message Board" });
});

router.post("/new", function (req, res, next) {
  const newMessage = {
    user: req.body.username,
    text: req.body.message,
    added: new Date(),
  };

  messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;
