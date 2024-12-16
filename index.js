const express = require("express");
const cors = require("cors");
const helmet = require("helmet");


const app = express();


app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.static('public'));

app.get("/",(req,res,next)=>{
    res.json([{"sound_url":"birtakim_insanlar_part_1.mp3","title":"birtakım_insanlar_part_1"},{"sound_url":"birtakim_insanlar_part_2.mp3","title":"birtakım_insanlar_part_2"}]);
});



app.listen(3000);

