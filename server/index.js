const express = require('express')
const cors = require("cors")
const app = express()

app.use(express.json());





const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"],
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));
//   const port = process.env.PORT || 5000;

  
app.get("/api", (req, res) => {
    res.json({"jobTypes": ["Radio", "Commercials", "Events"] })
})


app.listen(5000, () => {console.log("Server running on PORT 5000") })
