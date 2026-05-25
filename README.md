# aws-portfolio-cloud-project
Portfolio Website on AWS Cloud ☁️
A personal portfolio website fully deployed on AWS using a serverless architecture. Built as part of a cloud computing learning project covering static hosting, serverless functions, and CDN deployment.
🔗 Live Website
https://dr1684nh7sqf0.cloudfront.net/

📌 Project Overview
Built and deployed a complete portfolio website with a serverless contact form using 5 AWS services — no backend server required. The contact form sends real emails to Gmail without any running server.
⚙️ AWS Services Used
ServicePurposeAWS S3Hosts the static portfolio website filesAWS CloudFrontProvides HTTPS and global CDNAWS API GatewayPublic HTTPS endpoint for the contact formAWS LambdaServerless function that processes form submissionsAWS SESSends contact form emails to Gmail
📁 Project Structure
├── index.html              # Complete portfolio website (HTML + CSS + JS)
├── lambda_function.mjs     # Lambda contact form handler (Node.js)
└── README.md               # Project documentation


🚀 How It Works
1)Static Website

index.html is uploaded to S3 bucket
S3 static website hosting serves it publicly
CloudFront provides HTTPS and caches content at 400+ global locations

2)Contact Form Flow

Visitor fills the form and clicks Send
JavaScript POSTs data to the API Gateway endpoint
API Gateway triggers the Lambda function
Lambda calls AWS SES
SES delivers the email to Gmail inbox

📚 What I Learned

AWS S3 static website hosting and bucket policies
Serverless architecture with AWS Lambda (Node.js)
HTTP API creation in API Gateway with CORS configuration
IAM roles and permissions
AWS SES email verification and programmatic email sending
CloudFront CDN and HTTPS setup
Event-driven cloud architecture
