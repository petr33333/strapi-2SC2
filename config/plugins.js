module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-bunnynet",
      providerOptions: {
        api_key: process.env.BUNNY_API_KEY,
        storage_zone: process.env.BUNNY_STORAGE_ZONE,
        pull_zone: process.env.BUNNY_PULL_ZONE,
      },
    },
  },
});
