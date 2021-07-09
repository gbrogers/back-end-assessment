const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "I can not believe you are about to eat my little home.",
    "run.",
    "About time I got out of that cookie",
    "You don't have to be faster than the bear, you just have to be faster than the slowest person running from it.",
    "Be kind to pigeons, a statue may someday be made of you.",
  ];

  let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomFortuneIndex];
  // console.log(randomFortune);

  res.status(200).send(randomFortune);
});

app.get("/api/house-color", (req, res) => {
  const colors = [
    "HOT-PINK",
    "LIME",
    "MUSTARD",
    "MELON-MIST",
    "MAGENTA",
    "PINNEAPPLE",
  ];

  let colorIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[colorIndex];
  // console.log(randomColor);

  res.status(200).send(randomColor);
});

app.get("/api/life-hacks", (req, res) => {
  const lifeHack = [
    "eat your greens - I mean it.",
    "wash your hands - you should know this by now...",
    "limit alcohol comsumption - unless its red wine... that would just be tragic.",
    "don't go to the grocery store hungry - getting home and realizing you got zero meals is a bummer.",
    "brownies for breakfast is a must.",
    "when the time comes, get your colonoscopies and mammagrams",
    "brownies and red wine make an EXCELLENT combo.",
    "life is short - invest in yourself and your happiness - and definitely get donuts.",
  ];

  let hackIndex = Math.floor(Math.random() * lifeHack.length);
  let randomLifeHack = lifeHack[hackIndex];
  // console.log(lifeHack);

  res.status(200).send(randomLifeHack);
});
////////////////////////////////////////////////////
app.get("/api/try-things", (req, res) => {
  const things = [
    "reading more.",
    "a more diverse diet.",
    "pushing yourself to the next level.",
    "to prioritize getting outside.",
    "to learn something new every single day.",
    "to prioritize yourself and your health.",
  ];

  let thingsIndex = Math.floor(Math.random() * things.length);
  let randomThing = things[thingsIndex];
  // console.log(randomThing);

  res.status(200).send(randomThing);
});

app.listen(4000, () => console.log("Server running on 4000"));
