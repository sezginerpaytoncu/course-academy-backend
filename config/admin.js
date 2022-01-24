module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '84ee370c10e4317f022d1f931917e024'),
  },
});
