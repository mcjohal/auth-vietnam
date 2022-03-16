/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "mari",
        mongodb_password: "giniDelia1967",
        mongodb_clustername: "cluster0",
        mongodb_database: "next-auth",
        NEXTAUTH_URL: "http://localhost:3000/",
      },
    };
  }

  return {
    env: {
      mongodb_username: "mari",
      mongodb_password: "giniDelia1967",
      mongodb_clustername: "cluster0",
      mongodb_database: "next-auth",
      NEXTAUTH_URL: "https://auth-mongo.vercel.app",
    },
  };
};
