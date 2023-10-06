/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://catatancrud.vercel.app",
    MONGODB_URI:
      "mongodb+srv://dhimasferdiansyah9:EkAS0gogtrkbChAR@cluster0.rxthdpj.mongodb.net/catatancrud_db",
  },
};

module.exports = nextConfig;
