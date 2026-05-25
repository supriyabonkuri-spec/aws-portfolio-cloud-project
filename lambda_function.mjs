import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "ap-south-2" });

export const handler = async (event) => {
  const body = JSON.parse(event.body);
  const { name, email, subject, message } = body;

  const params = {
    Source: "supriyabonkuri@gmail.com",
    Destination: {
      ToAddresses: ["supriyabonkuri@gmail.com"],
    },
    Message: {
      Subject: {
        Data: `Portfolio Contact: ${subject || "New message"} from ${name}`,
      },
      Body: {
        Text: {
          Data: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        },
      },
    },
  };

  try {
    await ses.send(new SendEmailCommand(params));
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};