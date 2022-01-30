module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5605534bbbe7283f97f85e9b89910208'),
  },
});
