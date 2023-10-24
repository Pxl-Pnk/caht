const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import axios

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      {
        headers: {
          "private-key": "78e715f6-aeca-451d-8429-42734200c395",
        },
      }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.error("Error in authentication:", e);
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
