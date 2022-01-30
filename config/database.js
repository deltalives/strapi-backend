module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'delta-lives'),
      user: env('DATABASE_USERNAME', 'delta-lives'),
      password: env('DATABASE_PASSWORD', 'delta-lives'),
      // ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
