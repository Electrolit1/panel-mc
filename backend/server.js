const express = require("express");
const cors = require("cors");
const { Rcon } = require("rcon-client");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/cmd", async (req, res) => {
  const { command } = req.body;
  try {
    const rcon = await Rcon.connect({
      host: "localhost", // cambia si es otro servidor
      port: 25575,
      password: "1234"
    });

    const response = await rcon.send(command);
    await rcon.end();
    res.json({ result: response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Backend corriendo en http://localhost:3000"));
