const { betterAuth } = require('better-auth');
const { mongooseAdapter } = require('better-auth/adapters/mongoose');
const mongoose = require('mongoose');

const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: 'https://docappoint-server-alpha.vercel.app',
  basePath: '/api/auth',
  trustedOrigins: [
    'https://docappoint-client.vercel.app',
    'http://localhost:5173'
  ],
  database: mongooseAdapter(mongoose),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }
  },
});

module.exports = auth;
