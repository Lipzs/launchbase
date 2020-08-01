const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true
});

server.get("/", function(req, res) {
  const about = {
    avatar_url: "https://scontent-gru1-1.cdninstagram.com/v/t51.2885-19/s150x150/53117317_2279066232335044_8811317607530496000_n.jpg?_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_ohc=v8dpExigaT4AX-VYgPY&oh=9794c1d8f19243038eaef02b1fe63798&oe=5F39B865",
    name: "Filipe Dias",
    role: "Aluno - RocketSeat",
    description: 'Programador FullStack - Estudante da <a href="http://rocketseat.com.br" target="_blank">RocketSeat</a>',
    links: [
      { name:"Github", url:"https://github.com/Lipzs"},
      { name:"Twitter", url:"https://twitter.com/filipedias823"},
      { name:"Linkedin", url:"https://www.linkedin.com/in/filipe-j%C3%BAnio-dias-carneiro-0258601a5/"}
    ]
  };

  return res.render("about", { about });
});

server.get("/classes", function(req, res) {
  return res.render("classes", {items: videos});
});

server.get("/video", function(req, res) {
  const id = req.query.id;

  const video = videos.find(function(video) {
    return video.id == id;
  });

  if(!video){
    return res.send("Video Not Found");
  };

  return res.render("video", { item: video });
});

server.listen(5000, function() {
  console.log("server is running");
});