/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI: "mongodb+srv://gangpayee:gangpayee@cluster0.4raiqsk.mongodb.net/nextjsproject?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
