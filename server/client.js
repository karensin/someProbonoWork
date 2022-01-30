const fetch = require("node-fetch");

(async () => {
    await fetch("http://localhost:4000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            to: "kkwsin@gmail.com",
            subject: "Test",
            body: "body",
        }),
    });
})();
