/** @type {import('next').NextConfig} */
let path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: path.join(__dirname, "styles"),
  env: {
    GITHUB_ID: "d497fbc5b2674bc69b26",
    GITHUB_SECRET: "016da4ae8197b947837ca83d7ad1e74ed0051b80",
    DATABASE_URL:
      "mongodb+srv://nazrul:CUwOi06Y6xL6MKtT@cluster0.wew6u.mongodb.net/spotify-clone",
    NEXTAUTH_SECRET: "nazrul",
  },
};

module.exports = nextConfig;
