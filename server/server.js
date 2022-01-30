const express = require("express");
const app = express();
const port = 4000;
const email = require("./email");

// parse application/json
app.use(express.json());

app.post("/send-email", async (req, res) => {
    const { to, subject, body } = req.body;
    await email.sendEmail({ to, subject, body });
    res.sendStatus(200);
});

// should only be needed once again when we determine sender email
// app.get("/oauth/callback", async (req, res) => {
//     console.log(res);
// });

app.listen(port, () => {
    console.log(`Server listening on port:${port}`);
});
