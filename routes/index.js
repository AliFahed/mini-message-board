var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hey Everyone",
    user: "Ali",
    added: new Date(),
  },
  {
    text: "Hey",
    user: "Draco",
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
    text: req.body.message,
    user: req.body.username,
    added: new Date(),
  };

  messages.unshift(newMessage);
  res.redirect("/");
});

module.exports = router;
