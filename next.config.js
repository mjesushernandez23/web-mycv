/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "." : undefined,
};

module.exports = nextConfig;

const intercept = require("intercept-stdout");

function interceptStdout(text) {
  if (text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}

if (process.env.NODE_ENV === "development") {
  intercept(interceptStdout);
}
