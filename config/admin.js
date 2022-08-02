module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bce6f89b440290327604155ce3007c08'),
  },
});
