const env = process.env.NODE_ENV;

const dev = {
  secret: 'QWERTYUIOPASDFGHJKLZXCVBNM',
  accessTokenLifetime: '30s',
  host: 'localhost',
  port: '8081',
  debug: true,
  database: 'localhost/sportwear',
}

const test = {
  secret: 'QWERTYUIOPASDFGHJKLZXCVBNM',
  accessTokenLifetime: '30s',
  host: 'localhost',
  port: '8081',
  debug: false,
  database: 'localhost/sportwearTest',
}

const config = {
  dev,
  test
};

module.exports = config[env];
