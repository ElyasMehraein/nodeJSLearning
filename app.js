const jwt = require("jsonwebtoken");

const secretKey = "finbojegdnfbo;uegnrbujnfsjm";
const accessToken = jwt.sign({ id: 112, email: "amin@gmail.com" }, secretKey, {
  // algorithm: "",
  expiresIn: "5s",
});

// console.log("Access Token =>", accessToken);

const payloadData = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEyLCJlbWFpbCI6ImFtaW5AZ21haWwuY29tIiwiaWF0IjoxNjkyMDg4NDExLCJleHAiOjE2OTIwODg0MTZ9.lKcXXS9KXgxcGDc9DFPA-naXjbfCkKv2TTKn8yoMaOU",
  secretKey
);

console.log("Payload Data =>", payloadData);
