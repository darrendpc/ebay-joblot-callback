const express = require("express");
const app = express();

app.get("/callback", (req, res) => {
  const code = req.query.code;
  console.log("🔐 eBay test code:", code);
  res.send(`✅ Received eBay code: ${code}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
