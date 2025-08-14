import express from "express";

const app = express();
app.use(express.json());

// SNS will POST here
app.post("/sns-endpoint", (req, res) => {
    // If this is a subscription confirmation, log the link to confirm
    if (req.body.Type === "SubscriptionConfirmation") {
        console.log("🔔 Confirm subscription by visiting:", req.body.SubscribeURL);
    } 
    // If it's an actual message, log the content
    else if (req.body.Type === "Notification") {
        console.log("📩 Message received:", req.body.Message);
    }
    res.sendStatus(200); // Tell SNS we got the message
});

app.listen(3000, () => {
    console.log("✅ Consumer app running on port 3000");
});
