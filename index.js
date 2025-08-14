import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import dotenv from "dotenv";

dotenv.config();

const client = new SNSClient({ region: process.env.AWS_REGION });

async function sendMessage() {
    const command = new PublishCommand({
        TopicArn: process.env.SNS_TOPIC_ARN,
        Message: JSON.stringify({
            orderId: Math.floor(Math.random() * 10000),
            status: "Shipped"
        })
    });

    await client.send(command);
    console.log("✅ Message sent to SNS!");
}

sendMessage();
